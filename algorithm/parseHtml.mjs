// JSON format is still not finalized

// Simple parser from HTML to JSON
// Tested for getLinkedSections
const matchRowGroup = /<(thead|tbody)>[\s\S]*?<\/\1>/g;
const matchTr = /<tr>[\s\S]*?<\/tr>/g;
const matchTdTh = /<(td|th)[^>]*>[\s\S]*?<\/\1>/g;
export function parseHtmlTable(htmlString) {
	let result = [];
	const matches = htmlString.matchAll(matchRowGroup);
	for (const match of matches) {
		let rowGroup = { type: match[1], data: [] };
		const rows = match[0].matchAll(matchTr);
		// console.log(match[0]);
		for (const row of rows) {
			rowGroup.data.push([...row[0].matchAll(matchTdTh)].map(x => {
				// innerHtml of the td/th element
				return x[0];
			}));
		}
		// Test if no rows in rowGroup
		if (rowGroup.data.length === 0) {
			rowGroup.data = { noTr: true, data: match[0].match(matchTdTh)[0] };
		}
		result.push(rowGroup);
	}
	return result;
}

// [\s\S]*? matches arbitrary characters while minimizing length
// Not including g tag on this, not sure if that's best practice
const matchTable = /<table[^>]*>[\s\S]*?<\/table>/;
function extractHtmlTable(htmlString) {
	return htmlString.match(matchTable)[0];
}
