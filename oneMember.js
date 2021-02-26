async function oneMember() {
  const member = await context('id');
  const token = await context('token');

  var results = '';
  
  // Organization:            Alphanumerically.
  // Key naming convention:   Same as graphQL queries.
  const rolesReferences = ["UDM", "UTM", "SSO"];
  const apiKeyMap = [
	["acduStatus", ["UDM", "UTM", "SSO"]],
   ["afrSectionId", ["UDM", "UTM", "SSO"]],
   ["afsc2", ["UDM", "UTM", "SSO"]],
   ["afsc3", ["UDM", "UTM", "SSO"]],
   ["afsc4", ["UDM", "UTM", "SSO"]],
   ["age", ["UDM", "UTM", "SSO"]],
   ["angRollIndicator", ["UDM", "UTM", "SSO"]],
   ["assignedPas", ["UDM", "UTM", "SSO"]],
   ["assignedPasCleartext", ["UDM", "UTM", "SSO"]],
   ["attachedPas", ["UDM", "UTM", "SSO"]],
   ["availabilityCode", ["UDM", "UTM", "SSO"]],
   ["availabilityCodeCleartext", ["UDM", "UTM", "SSO"]],
   ["availabilityDate", ["UDM", "UTM", "SSO"]],
   ["availabilityStatus", ["UDM", "UTM", "SSO"]],
   ["availabilityStatusCleartext", ["UDM", "UTM", "SSO"]],
   ["cafsc", ["UDM", "UTM", "SSO"]],
   ["civilianArtid", ["UDM", "UTM", "SSO"]],
   ["createdAt", ["UDM", "UTM", "SSO"]],
   ["dafsc", ["UDM", "UTM", "SSO"]],
   ["dateArrivedStation", ["UDM", "UTM", "SSO"]],
   ["dateOfBirth", ["UDM", "UTM", "SSO"]],
   ["deployAdminStatus", ["UDM", "UTM", "SSO"]],
   ["deployAdminStatusCleartext", ["UDM", "UTM", "SSO"]],
   ["deployAdminStopDate", ["UDM", "UTM", "SSO"]],
   ["deployLegalStatus", ["UDM", "UTM", "SSO"]],
   ["deployLegalStatusCleartext", ["UDM", "UTM", "SSO"]],
   ["deployLegalStopDate", ["UDM", "UTM", "SSO"]],
   ["deployPhysStatus", ["UDM", "UTM", "SSO"]],
   ["deployPhysStatusCleartext", ["UDM", "UTM", "SSO"]],
   ["deployPhysStopDate", ["UDM", "UTM", "SSO"]],
   ["deployTimeStatus", ["UDM", "UTM", "SSO"]],
   ["deployTimeStatusCleartext", ["UDM", "UTM", "SSO"]],
   ["deployTimeStopDate", ["UDM", "UTM", "SSO"]],
   ["deros", ["UDM", "UTM", "SSO"]],
   ["doe", ["UDM", "UTM", "SSO"]],
   ["dor", ["UDM", "UTM", "SSO"]],
   ["dos", ["UDM", "UTM", "SSO"]],
   ["dtSctyInvesCompl", ["UDM", "UTM", "SSO"]],
   ["dutyPhone", ["UDM", "UTM", "SSO"]],
   ["dutyStartDate", ["UDM", "UTM", "SSO"]],
   ["dutyTitle", ["UDM", "UTM", "SSO"]],
   ["ets", ["UDM", "UTM", "SSO"]],
   ["fullName", ["UDM", "UTM", "SSO"]],
   ["functionalCategory", ["UDM", "UTM", "SSO"]],
   ["gainingPas", ["UDM", "UTM", "SSO"]],
   ["gainingPasCleartext", ["UDM", "UTM", "SSO"]],
   ["grade", ["UDM", "UTM", "SSO"]],
   ["gradePermProj", ["UDM", "UTM", "SSO"]],
   ["homeAddress", ["UDM", "UTM", "SSO"]],
   ["homeCity", ["UDM", "UTM", "SSO"]]
   ["homePhoneNumber", ["UDM", "UTM", "SSO"]]
   ["homeState", ["UDM", "UTM", "SSO"]]
   ["homeZipCode", ["UDM", "UTM", "SSO"]]
   ["id", ["UDM", "UTM", "SSO"]]
   ["lastEvalCloseDate", ["UDM", "UTM", "SSO"]]
   ["lastEvalRating", ["UDM", "UTM", "SSO"]]
   ["limitationCode", ["UDM", "UTM", "SSO"]]
   ["limitationCodeCleartext", ["UDM", "UTM", "SSO"]]
   ["limitationEndDate", ["UDM", "UTM", "SSO"]]
   ["maritalStatus", ["UDM", "UTM", "SSO"]]
   ["memberCat", ["UDM", "UTM", "SSO"]]
   ["officeSymbol", ["UDM", "UTM", "SSO"]]
   ["pafsc", ["UDM", "UTM", "SSO"]]
   ["perfIndicator", ["UDM", "UTM", "SSO"]]
   ["projEvalCloseDate", ["UDM", "UTM", "SSO"]]
   ["recordStatus", ["UDM", "UTM", "SSO"]]
   ["reenlEligStatus", ["UDM", "UTM", "SSO"]]
   ["rnltd", ["UDM", "UTM", "SSO"]]
   ["secClr", ["UDM", "UTM", "SSO"]]
   ["secEligDt", ["UDM", "UTM", "SSO"]]
   ["spouseSsan", ["UDM", "UTM", "SSO"]]
   ["ssan", ["UDM", "UTM", "SSO"]]
   ["supvBeginDate", ["UDM", "UTM", "SSO"]]
   ["supvName", ["UDM", "UTM", "SSO"]]
   ["tafmsd", ["UDM", "UTM", "SSO"]]
   ["techid", ["UDM", "UTM", "SSO"]]
   ["typeSecInv", ["UDM", "UTM", "SSO"]]
   ["uifCode", ["UDM", "UTM", "SSO"]]
   ["uifDispositionDate", ["UDM", "UTM", "SSO"]]
   ["updatedAt", ["UDM", "UTM", "SSO"]]
  ];
  
  
  
  // Code required to get the role of the current API user.
  const role = token;
  
  // Creates an empty array to be filled with all graphQL member characteristics based on user permissions.
  var apiUserPermissions = '';
  for (let i = 0; i < apiKeyMap.length; i++)
  {
   if (apiKeyMap[i][1].includes(role))
      apiUserPermissions += apiKeyMap[i][0]+ "\n";
  }
  
  const { oneRoster } = await gql('{
    oneRoster (where: {id: {eq: '+id+'}}) {
      results {
        '+apiUserPermissions+'
      }
    }
  }');

  return oneRoster.results;
}

export default oneMember;


// bb functions build (for debuging while inside root project folder)
// civ and mil rosters merged eventually.