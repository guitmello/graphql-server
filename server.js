const express = require('express');
const expressGraphQl = require('express-graphql');
const schema = require('./schema');


const app = express();

app.use('/graphql', expressGraphQl({
    schema: schema,
    graphiql: true
}));

app.listen(3001, () => {
    console.log("Server is running on port 3001")
});