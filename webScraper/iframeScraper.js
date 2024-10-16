// This file is intended for use on the page https://reg-prod.ec.ucmerced.edu/StudentRegistrationSsb/ssb/registration
// Currently, it only provides some basic functions and does not implement the actual scraping.

// Sometimes, this code just does not work and trying to create the iframe results in a 500 error
// I believe this is just due to a cookie expiring, so close the window, reopen, and try again

// Short for get subject course combo list
async function getSCCList(pageOffset, sleep, txt_term = "202510", pageMaxSize = 10) {
	// Does not remove all HTML, but suffices
	document.body.innerHTML = "";
	// Short for registration helper iframe
	const rhif = document.createElement("iframe");
	rhif.setAttribute("src", `https://reg-prod.ec.ucmerced.edu/StudentRegistrationSsb/ssb/courseSearchResults/courseSearchResults?txt_term=${txt_term}&startDatepicker=&endDatepicker=&pageOffset=${pageOffset}&pageMaxSize=${pageMaxSize}&sortColumn=subjectDescription&sortDirection=asc`);
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

async function getCRNList(scc, pageOffset, sleep, txt_term = "202510", pageMaxSize = 10) {
	document.body.innerHTML = "";
	const rhif = document.createElement("iframe");
	rhif.setAttribute("src", `https://reg-prod.ec.ucmerced.edu/StudentRegistrationSsb/ssb/searchResults/searchResults?txt_subjectcoursecombo=${scc}&txt_term=${txt_term}&pageOffset=${pageOffset}&pageMaxSize=${pageMaxSize}&sortColumn=subjectDescription&sortDirection=asc`);
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
	return json.data.map(entry => entry.courseReferenceNumber); 
}

// Weird sleep function that seems like it would be good for this usecase
function weirdSleep(i) {
	if (i <= 2) {
		return null; // Let's just try not sleeping
	} else if (i < 50) {
		return new Promise(r => setTimeout(r, 100));
	} else {
		console.log(`Called sleep ${i}, which probably means something is broken`);
		return new Promise(r => setTimeout(r, 5000));
	}
}
