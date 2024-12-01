import { querySsb } from "./fetchCrn.mjs";
import { parseSpanEntries } from "../algorithm/parseHtml.mjs";

// Takes in data similar to ./data/ref.json and
// Outputs similar data, but filtered down and with numbers for CRNs
export function pareRef(json) {
	const data = json.data; // ignore json.unfinished
	let output = {};
	for (const subjectCode in data) {
		let subjectOutput = {};
		let pareSubject = true;
		for (const courseNumber in data[subjectCode]) {
			if (data[subjectCode][courseNumber].length === 0) {
				continue;
			}
			// courseNumber may be alphanumberic, but CRN is always a number
			subjectOutput[courseNumber] = data[subjectCode][courseNumber]
												.map(crn => parseInt(crn));
			pareSubject = false;
		}
		if (!pareSubject) {
			output[subjectCode] = subjectOutput;
		}
	}
	return output;
}

// Takes in data similar to ./data/pared.json
// Output sorted array of CRNs
export function sortCrns(json) {
	let output = [];
	for (const subjectCode in json) {
		for (const courseNumber in json[subjectCode]) {
			output.push(...json[subjectCode][courseNumber]);
		}
	}
	output.sort((a, b) => a - b);
	return output;
}

// Takes in data similar to ./data/pared.json
// Output JSON mapping from course title to course code
// e.g. { Engineering: ENGR, Writing: WRI }
// Required because course code is not always accessible from just CRN
// Course title is always accessible with getCourseDetails, though
export async function findCourseTitles(json, term) {
	if (term === undefined) {
		throw "Term should be a term code, e.g. 202510";
	}
	let output = {};
	for (const subjectCode in json) {
		for (const courseNumber in json[subjectCode]) {
			let details;
			try {
				details = await querySsb("getClassDetails", json[subjectCode][courseNumber][0], term);
				output[parseSpanEntries(details).Subject] = subjectCode;
				break;
			} catch (e) {
				console.log("Sad CRN at", subjectCode, courseNumber, json[subjectCode][courseNumber][0]);
				// console.log(details);
				// throw e;
				continue;
			}
		}
	}
	return output;
}
