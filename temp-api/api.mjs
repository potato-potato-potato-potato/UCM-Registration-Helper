// Just use browser fetch for React version
import fetch from "node-fetch";

// This class is little more than a namespace
// No caching yet because that will add complication with React
export class API {
	/**
	 * @param {(string|number)} term Term code to query for, e.g. 202510
	 */
	constructor(term) {
		this.term = String(term);
	}
	/**
	 * @param {(string|number)} crn 5 digit identifier for a section
	 */
	async getClassName(crn) {
		const html = await querySsb("getClassDetails", crn, this.term);
		const json = parseSpanEntries(html);
		return `${json.Subject} ${json["Course Number"]} ${json["Section Number"]}`;
	}
}

// Following functions are not exported

// Logic from webScraper/fetchCrn.mjs
async function querySsb(query, crn, term) {
	const pathHead = "https://reg-prod.ec.ucmerced.edu/StudentRegistrationSsb/ssb/searchResults/";
	const pathTail = `?term=${term}&courseReferenceNumber=${crn}`;
	const response = await fetch(pathHead + query + pathTail);
	return await response.text();
}

// Logic from algorithm/parseHtml.mjs
// Modified to handle getClassDetails
// Added in handling for data not enclosed in a span
const matchSpanBrHr = /[^>]*<br\/?>|<hr>|<span[^>]*>[\s\S]*?<\/span>/g;
function parseSpanEntries(htmlString) {
	let result = {};
	const matches = htmlString.matchAll(matchSpanBrHr);
	let currentProperty = null;
	for (const match of matches) {
		// console.log(currentProperty, match[0]);
		if (match[0] == "<hr>") {
			continue; // Could be changed to treat <br> as significant
		}
		// Inconsistency with <br> and <br/> based on the format I've encountered
		// This logic is subject to breaking since it's not based on any specification
		let innerText;
		if (match[0].endsWith("<br/>") || match[0].endsWith("<br>")) {
			innerText = match[0].substring(0, match[0].lastIndexOf("<"));
			innerText = innerText.replace(/^\s+|\s+$/g, "");
			if (innerText == "") {
				continue;
				// throw new Error(`Expected non-empty data for match ${match}`);
			}
		} else {
			innerText = match[0].substring(match[0].indexOf(">") + 1, match[0].length - 7);
		}
		if (currentProperty == null) {
			if (innerText[innerText.length-1] != ":") {
				throw new Error(`Expected colon at end of ${innerText}`);
			}
			currentProperty = innerText.substring(0, innerText.length - 1);
		} else {
			result[currentProperty] = innerText;
			currentProperty = null;
		}
	}
	return result;
}
