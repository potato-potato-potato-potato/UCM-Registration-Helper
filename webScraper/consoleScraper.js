// Note that the CRN scraping part of the project will be put on hold
// for a while since it is not very high priority. If and when this
// file is revisited, though, the goals are to improve the sleep to
// test if the page is ready and sleep for longer if necessary. In
// addition, it should be made simpler to merge the CRNs scraped
// from multiple runs of scrapePage. How complicated everything
// needs to be depends somewhat on whether or not the assumption is
// made that no deletions or additions to the list of courses or the
// list of CRNs within the UC Merced database.
async function scrapePage(output, pageLimit) {
	// output is reference to object data is recorded to
	// pageLimit determines maximum number of pages to scrape
	pageLimit ??= 1;
	
	// Consider making it simpler to change sleep values
	// Everything is set at 1 second right now for the
	// sake of simplicity and because 0.1 seconds was
	// tested and resulted in the page not being able to
	// load reliably.
	
	for (let page = 0; page < pageLimit; ++page) {
		for (let i = 0; ; ++i) {
			const tr = document.querySelectorAll("#table1>tbody>tr");
			if (i >= tr.length) {
				break;
			}
			const subject = tr[i].querySelector("td[data-property=subject]").innerText;
			// Note that courseNumber may be alphanumeric
			const courseNumber = tr[i].querySelector("td[data-property=courseNumber]").innerText;
			let sectionOutput = output[subject] ?? (output[subject] = {});
			sectionOutput[courseNumber] = [];
			tr[i].querySelector("td>button").click();
			handleSections(sectionOutput[courseNumber]);
			// Go back to browse courses page
			await sleep(1000);
			document.querySelector(".return-course-button").click()
		}
		if (!nextPage()) {
			break;
		}
	}
	
	async function handleSections(sectionOutput) {
		await sleep(1000);
		document.querySelectorAll("#table1>tbody>tr>td[data-property=courseReferenceNumber]").forEach(td => {
			sectionOutput.push(td.innerText);
		});
		if (nextPage()) {
			await sleep(1000);
			handleSections();
		}
	}

	function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	function nextPage() {
		const button = document.querySelector("button.paging-control.next.ltr.enabled");
		if (button === null) {
			return false;
		}
		button.click();
		return true;
	}
}
