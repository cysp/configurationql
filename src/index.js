const fs = require('fs');
const path = require('path');
const { makeExecutableSchema } = require('graphql-tools');
const { resolver: configurationResolver } = require('./configuration');


exports.schema = makeExecutableSchema({
  typeDefs: [fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8")],
  resolvers: {
    Query: {
      configuration: configurationResolver,
    },
  },
});
