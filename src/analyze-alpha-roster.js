/*
import mapObject from './alpha-roster-map.js';
import * as alphaRosterQueries from './graphql-queries.js';
*/

function analyzeAlphaRoster() {

	return "string";
}
/*
	const id = await context("record_id");

	var record = await getRecord(id);
	return record;

	//var match = await findMatch(record);

	//var certainty = (match === null) ? 0 : compareRecords(record, match);

	//Logically, a null match will always evaluated to certainty being under 100 -
	//but for readability, I left it there.  It's one extra operation...big whoop.
	//Sometimes readability > efficiency
	//var action = (match === null || certainty < 100) ? "import" : "noaction";

	//return (await addAnalysisToTable(record, match, certainty, action)) ? 1 : 0;

}

async function getRecord(record_id) {
  	let query = alphaRosterQueries.findImportObjectWhere;
    let record = mockImportObj.data;
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
	var total = 100;

	var total = mapObject.map(item => item.weight).reduce((prev, next) => prev + next);

	for (var column in mapObject) {
		if (record[column.roster] == match[column.import]) {
			score = score + column.weight;
		}
	}
	return (Math.ceil((score / total) * 100));

}

//PASSES IDS (Match is null if not found)
async function addAnalysisToTable(record, match, certainty, action) {

		console.debug("pre getquery");
		let query = alphaRosterQueries.createAnalysis;
		let record_id = (record && record.id) ? record.id : 0;
		let match_id = (match && match.id) ? match.id : 0;

		console.debug("pre prematch()");
		if (!match) {
			return await gql(query, {
				input: { action: action, certainty: certainty, rosterImport: record_id },
			});
		} else {
			console.debug("pre gql()");
			console.debug("Action: " + String(action) + ", Certainty: " + Number(certainty) + ", Import: " + Number(record.id) + ", Roster: " + Number(match.id));
			return await gql(query, {
				input: { action: action, certainty: certainty, rosterImport: record_id, roster: match_id },
			});
			console.debug("post gql()");
		}
}
let mockImportObj = JSON.parse(`{
  "data": {
    "allRosterimport": {
      "results": [
        {
          "assignedPas": "LA1BHD8",
          "officeSymbol": "SCB",
          "deployAdminStatus": null,
          "grade": "SRA",
          "reenlEligStatus": "3C",
          "spouseSsan": null,
          "fullName": "GAY, CAMDEN",
          "supvName": "THOMAS LUCAS",
          "techid": null,
          "afsc3": null,
          "angRollIndicator": null,
          "secClr": "V",
          "dutyTitle": "ASSET MANAGER",
          "civilianArtid": null,
          "availabilityStatus": null,
          "recordStatus": 10,
          "deployPhysStatus": null,
          "deployPhysStatusCleartext": null,
          "lastEvalRating": null,
          "uifCode": null,
          "deployAdminStatusCleartext": null,
          "cafsc": "-3D151",
          "deployLegalStatus": null,
          "deployTimeStatusCleartext": null,
          "deployTimeStatus": null,
          "deployLegalStatusCleartext": null,
          "homeCity": "RIVERSIDE",
          "acduStatus": null,
          "limitationCodeCleartext": null,
          "attachedPas": null,
          "age": "21",
          "homePhoneNumber": "3578494871",
          "ssan": "134-47-1375",
          "homeState": "IA",
          "pafsc": "3D151",
          "perfIndicator": "A",
          "assignedPasCleartext": "84 COMMUNICATIONS SQ BBHD81",
          "typeSecInv": "70",
          "availabilityCode": null,
          "gradePermProj": null,
          "availabilityCodeCleartext": null,
          "afsc2": null,
          "gainingPasCleartext": null,
          "limitationCode": null,
          "homeZipCode": "52327",
          "homeAddress": "1701 CAPT KIRK LANE",
          "afrSectionid": null,
          "dutyPhone": "3125953754",
          "dafsc": "-3D151",
          "maritalStatus": "S",
          "functionalCategory": "A",
          "afsc4": null,
          "availabilityStatusCleartext": null,
          "gainingPas": null
        }
      ]
    }
  }
}`);
*/

export default analyzeAlphaRoster;
