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
	/**
	 * @param {(string|number)} crn 5 digit identifier for a section
	 */
	async getMeetingTimes(crn) {
		const textData = await querySsb("getFacultyMeetingTimes", crn, this.term);
		const json = JSON.parse(textData);
		return json.fmt[0].meetingTime; // Format not finalized
	}
	/**
	 * @param {(string|number)} crn 5 digit identifier for a section
	 */
	async getLinkedSections(crn) {
		const textData = await querySsb("getLinkedSections", crn, this.term);
		const table = parseHtmlTable(textData);
		let output = [];
		// Iterate through all entries of type tbody
		for (let i = 3; i < table.length; i += 3) {
			output.push(table[i].data[0][3].substring(4, 9));
		}
		return output;
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
const matchSpanBrHr = /[^>]*<br\/?>|<hr>|<span[^>]*>[\s\S]*?<\/span>/g;
function parseSpanEntries(htmlString) {
	let result = {};
	const matches = htmlString.matchAll(matchSpanBrHr);
	let currentProperty = null;
	for (const match of matches) {
		if (match[0] == "<hr>") {
			continue; // Could be changed to treat <br> as significant
		}
		let innerText;
		if (match[0].endsWith("<br/>") || match[0].endsWith("<br>")) {
			innerText = match[0].substring(0, match[0].lastIndexOf("<"));
			innerText = innerText.replace(/^\s+|\s+$/g, "");
			if (innerText == "") {
				continue;
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

// Logic from algorithm/parseHtml.mjs
const matchRowGroup = /<(thead|tbody)>[\s\S]*?<\/\1>/g;
const matchTr = /<tr>[\s\S]*?<\/tr>/g;
const matchTdTh = /<(td|th)[^>]*>[\s\S]*?<\/\1>/g;
function parseHtmlTable(htmlString) {
	let result = [];
	const matches = htmlString.matchAll(matchRowGroup);
	for (const match of matches) {
		let rowGroup = { type: match[1], data: [] };
		const rows = match[0].matchAll(matchTr);
		for (const row of rows) {
			rowGroup.data.push([...row[0].matchAll(matchTdTh)].map(x => {
				return x[0];
			}));
		}
		if (rowGroup.data.length === 0) {
			rowGroup.data = { noTr: true, data: match[0].match(matchTdTh)[0] };
		}
		result.push(rowGroup);
	}
	return result;
}
