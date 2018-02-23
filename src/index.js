const {
  GraphQLSchema,
  GraphQLObjectType,
} = require('graphql');

// const upgradeQueryField = require('./upgrade/schema/query/upgrade');

const configurationSchema = require('./schema/configuration/schema');


exports.schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      // upgrade: upgradeQueryField,
      configuration: configurationSchema.query.configuration,
    },
  }),
});