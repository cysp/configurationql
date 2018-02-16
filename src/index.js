const fs = require('fs');
const path = require('path');
const {
  makeExecutableSchema,
  mergeSchemas,
} = require('graphql-tools');

const {
  schema: upgradeSchema,
} = require('./upgrade');

const {
  schema: configurationSchema,
} = require('./configuration');


exports.schema = mergeSchemas({
  schemas: [
    upgradeSchema,
    configurationSchema,
  ],
});
//
//exports.schema = makeExecutableSchema({
//  typeDefs: [fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8")],
//  resolvers: {
//    Query: {
//      upgrade: upgradeResolver,
//      configuration: configurationResolver,
//    },
//  },
//});
