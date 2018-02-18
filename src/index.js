const {
  GraphQLSchema,
  GraphQLObjectType,
} = require('graphql');

const upgradeQueryField = require('./upgrade/schema/query/upgrade');

const configurationQueryField = require('./configuration/schema/query/configuration');


exports.schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      upgrade: upgradeQueryField,
      configuration: configurationQueryField,
    },
  }),
});