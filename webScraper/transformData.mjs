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
