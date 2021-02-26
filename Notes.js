// andrew example code
let query = 
{
   allRosterimport(where:$where) {
      results
   }
}
let record = await gql( query,
   {where:{id:{eq:record_id}},
}};

// custom functions andrew plans to make.
getRecord
setFormat
scanMatch
getCertainty
saveResult
save

getColumn
setRecordDatapoint
internalLogin
getRole
Get a user token info
// importRecord ()
// filter specific data ()
// current token is static, but will be Oauth in the future.
// andrew is working on 1, 3, and 4. I need to make the graphQL 5 and 2. 
// Create an endpoint in graphQL that can query a roster table based on what 
// fields a user needs access to. Future state is API token takes you to a list
// with all users and their tokens, but it will come up with user info like token, user, and filter.
// Superintendant, UDM, UTM. (Talk to Nick about what Nick needs for his DD 1556 form). Bettyblocks
// authentication for now, then worry about Oauth. Can do static for now and define access
// based on the token, but preferably they will have a role property.
// users need to be able to access a graphQL endpoint with our custom functions.
// want a user to be able to send a query.

// switch to a view table instead for filtering? Roster, UDM Roster relation for example guidance.
// 1556 tool Boone is using to help.