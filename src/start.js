const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const { schema } = require('./index');


const port = process.env['PORT'] || 3000


const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(port, () => {
  console.log("http://localhost:"+port+"/graphql");
});
