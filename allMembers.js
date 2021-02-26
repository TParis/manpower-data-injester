async function allMembers() {
  const { allRoster } = await gql(`{
    allRoster {
      results {
         name
         id
      }
    }
  }`);

  return allRoster.results;
}

export default allMembers;