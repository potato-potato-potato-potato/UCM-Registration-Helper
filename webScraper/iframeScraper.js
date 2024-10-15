// This file is intended for use on the page https://reg-prod.ec.ucmerced.edu/StudentRegistrationSsb/ssb/registration
// Currently, it only provides some basic functions and does not implement the actual scraping.

// Short for get subject course combo list
async function getSCCList(pageOffset, sleep, txt_term = "202510", pageMaxSize = 10) {
	// Does not remove all HTML, but suffices
	document.body.innerHTML = "";
	// Short for registration helper iframe
	const rhif = document.createElement("iframe");
	rhif.setAttribute("href", `https://reg-prod.ec.ucmerced.edu/StudentRegistrationSsb/ssb/courseSearchResults/courseSearchResults?txt_term=${txt_term}&startDatepicker=&endDatepicker=&pageOffset=${pageOffset}&pageMaxSize=${pageMaxSize}&sortColumn=subjectDescription&sortDirection=asc`);
	// Hacky solution with closures
	let rhifLoaded = false;
	rhif.addEventListener("load", event => {
		rhifLoaded = true;
	});
	// Required to make an iframe load
	document.body.appendChild(rhif);
	for (let i = 0; !rhifLoaded; ++i) {
		await sleep(i);
	}
	const json = JSON.parse(rhif.contentDocument.querySelector("body>pre").innerText);
	// If failing, test entry.subjectCode instead
	return json.data.map(entry => `${entry.subject}${entry.courseNumber}`);
}
