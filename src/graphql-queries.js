let getAllRosterImports = `
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

export {getAllRosterImports, findRosterObjectWhere};
