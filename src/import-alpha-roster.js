async function importAlphaRoster() {
  console.debug("Test");
}

async function getOneFileRecord() {

    const record = await gql(`{oneImport(where: {id: {eq: 2}}){
                             file}}`);
    return record;

}

export { importAlphaRoster };
