import * as maps from './alpha-roster-map.js';
import * as queries from './graphql-queries.js';

async function analyzeCivilianRoster() {

	const id = await context("record_id");

	var record = await getRecord(id);

	var match = await findMatch(record);

	var certainty = (match === null) ? 0 : compareRecords(record, match);

	//Logically, a null match will always evaluated to certainty being under 100 -
	//but for readability, I left it there.  It's one extra operation...big whoop.
	//Sometimes readability > efficiency
	var action = (match === null || certainty < 100) ? "import" : "no-action";

	return (await addAnalysisToTable(record, match, certainty, action)) ? 1 : 0;

}

async function getRecord(record_id) {
  	let query = queries.findCivilianImportObjectWhere;
    let record = await gql(query, {
        where: { id: {eq: record_id } },
    });
    let member = record.allCivilianrosterimport.results[0];
    return member;

}

async function findMatch(record) {

  	let query = queries.findRosterObjectWhere;
    let roster = await gql(query, {
        where: { fullName: {eq: record.name } },
    });

		let member = (roster.allRoster.results.length > 0) ? roster.allRoster.results[0] : null;

		return member;

}

function compareRecords (record, match) {

	var score = 0;

	var total = 0;

	maps.CivilianRosterMap.forEach(function(column) {
		if (record.hasOwnProperty(column.import) && match.hasOwnProperty(column.roster)) {
			if (record[column.import] == match[column.roster]) {
				score = score + column.weight;
			}
			//Only add up the properties used.
			total = total + column.weight;
		}
	});
	return (Math.ceil((score / total) * 100));

}

async function addAnalysisToTable(record, match, certainty, action) {

		console.debug("pre getquery");
		let query = queries.createAnalysis;
		let record_id = (record && record.id) ? record.id : 0;
		let match_id = (match && match.id) ? match.id : 0;

		console.debug("Action: " + String(action) + ", Certainty: " + Number(certainty) + ", Import: " + Number(record.id));
		console.debug("pre prematch()");
		if (!match) {
			console.debug("no match query");
			return await gql(query, {
				input: { action: action, certainty: certainty, civilianrosterimport: record_id },
			});
		} else {
			console.debug("pre gql()");
			return await gql(query, {
				input: { action: action, certainty: certainty, civilianrosterimport: record_id, roster: match_id },
			});
			console.debug("post gql()");
		}

}

export default analyzeCivilianRoster;
