import mapObject from './alpha-roster-map.js';
import * as alphaRosterQueries from './graphql-queries.js';


async function analyzeAlphaRoster() {
	const id = await context("record_id");

	var record = await getRecord(id);

	var match = await findMatch(record);

	if (match === null) {

		var certainty = compareRecords(record, match);

	}

	var action = (match === null) ? "import" : "merge";

}

async function getRecord(record_id) {
  	let query = alphaRosterQueries.findRosterObjectWhere;
    let record = await gql(query, {
        where: { id: {eq: record_id } },
    });
    let member = record.allRosterimport.results[0]
    return member;
}

async function findMatch(record) {
  	let query = alphaRosterQueries.findRosterObjectWhere;
    let roster = await gql(query, {
        where: { ssan: {eq: record.ssan } },
    });

		if (roster.allRoster.results.length > 0) {
    	let member = roster.allRoster.results[0]
    } else {
			member = null;
		}

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

	return math.ceil(score / total);
}

export default analyzeAlphaRoster;
