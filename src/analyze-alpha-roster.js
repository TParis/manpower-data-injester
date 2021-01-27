async function analyzeAlphaRoster() {
    const record_id = await context("record_id");
    let query = `
      {
        allRosterimport(where: $where) {
          results {
            id
            fullName
            dutyTitle
          }
        }
      }
    `; 
    let record = await gql(query, {
        where: { id: {eq: record_id } },
    });
    let member = record.allRosterimport.results[0]
    return "Record: " + member.fullName;
}

export default analyzeAlphaRoster;
