import mapObject from './alpha-roster-map.js';
import * as alphaRosterQueries from './graphql-queries.js';


async function analyzeAlphaRoster() {

	const id = await context("record_id");

	var record = await getRecord(id);

	var match = await findMatch(record);

	var certainty = (match === null) ? 0 : compareRecords(record, match);

	//Logically, a null match will always evaluated to certainty being under 100 -
	//but for readability, I left it there.  It's one extra operation...big whoop.
	//Sometimes readability > efficiency
	var action = (match === null || certainty < 100) ? "import" : "null";

	return (await addAnalysisToTable(record, match, certainty, action)) ? 1 : 0;

}

async function getRecord(record_id) {
  	let query = alphaRosterQueries.findImportObjectWhere;
    let record = await gql(query, {
        where: { id: {eq: record_id } },
    });
    let member = record.allRosterimport.results[0];
    return member;
}

async function findMatch(record) {
  	let query = alphaRosterQueries.findRosterObjectWhere;
    let roster = await gql(query, {
        where: { ssan: {eq: record.ssan } },
    });

		let member = (roster.allRoster.results.length > 0) ? roster.allRoster.results[0] : null;

		return member;
}

function compareRecords(record, match) {

	var score = 0;
	var total = mapObject.map(item => item.weight).reduce((prev, next) => prev + next);

	for (var column in mapObject) {
		if (record[column.roster] == match[column.import]) {
			score = score + column.weight;
		}
	}

	return (math.ceil((score / total) * 100));
}

async function addAnalysisToTable(record, match, certainty, action) {
		let query = alphaRosterQueries.createAnalysis;

		let roster_id = (match === null) ? 0 : match.id;

	  return await gql(query, {
	    input: { action: String(action), certainty: Number(certainty), importRecord: Number(record.id), rosterRecord: Number(roster_id) },
	  });
}

export default analyzeAlphaRoster;
