let findImportObjectWhere = `
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

let findRosterObjectWhere = `
  {
    allRoster(where: $where) {
      results {
        id
      }
    }
  }
`;

let createAnalysis = `
      mutation {
        createRosterimportanalysis(input: $input) {
          id
        }
      }
    `;

export {findImportObjectWhere, findRosterObjectWhere, createAnalysis};
