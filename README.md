# graphql-server
Simple GraphQL Server

Execute npm i

Execute npm run json:server

Execute npm run dev:server

**Methods for graphiQL**

*Select: *
{ customers {id, name, email, age} }
{ customer(id: 1) {id, name, email, age} }


*Add: *
mutation{ addCustomer(name: String, email: String,age: Int){ id } }


*Update: *
mutation{ updateCustomer(id: Int, name: String, email: String, age:String){ id } }


*Delete: *
mutation{ deleteCustomer(id: Int){ id } }