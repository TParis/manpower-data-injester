let findImportObjectWhere = `
  {
    allRosterimport(where: $where) {
      results {
        acduStatus
        afrSectionid
        afsc2
        afsc3
        afsc4
        age
        angRollIndicator
        assignedPas
        assignedPasCleartext
        attachedPas
        availabilityCode
        availabilityCodeCleartext
        availabilityStatus
        availabilityStatusCleartext
        cafsc
        civilianArtid
        dafsc
        deployAdminStatus
        deployAdminStatusCleartext
        deployLegalStatus
        deployLegalStatusCleartext
        deployPhysStatus
        deployPhysStatusCleartext
        deployTimeStatus
        deployTimeStatusCleartext
        dutyPhone
        dutyTitle
        fullName
        functionalCategory
        gainingPas
        gainingPasCleartext
        grade
        gradePermProj
        homeAddress
        homeCity
        homePhoneNumber
        homeState
        homeZipCode
        id
        lastEvalRating
        limitationCode
        limitationCodeCleartext
        maritalStatus
        officeSymbol
        pafsc
        perfIndicator
        recordStatus
        reenlEligStatus
        secClr
        spouseSsan
        ssan
        supvName
        techid
        typeSecInv
        uifCode
      }
    }
  }
`;

let findRosterObjectWhere = `
  {
    allRoster(where: $where) {
      results {
        acduStatus
        afrSectionid
        afsc2
        afsc3
        afsc4
        age
        angRollIndicator
        assignedPas
        assignedPasCleartext
        attachedPas
        availabilityCode
        availabilityCodeCleartext
        availabilityStatus
        availabilityStatusCleartext
        cafsc
        civilianArtid
        dafsc
        deployAdminStatus
        deployAdminStatusCleartext
        deployLegalStatus
        deployLegalStatusCleartext
        deployPhysStatus
        deployPhysStatusCleartext
        deployTimeStatus
        deployTimeStatusCleartext
        dutyPhone
        dutyTitle
        fullName
        functionalCategory
        gainingPas
        gainingPasCleartext
        grade
        gradePermProj
        homeAddress
        homeCity
        homePhoneNumber
        homeState
        homeZipCode
        id
        lastEvalRating
        limitationCode
        limitationCodeCleartext
        maritalStatus
        officeSymbol
        pafsc
        perfIndicator
        recordStatus
        reenlEligStatus
        secClr
        spouseSsan
        ssan
        supvName
        techid
        typeSecInv
        uifCode
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
