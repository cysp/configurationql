const {
  GraphQLSchema,
  GraphQLObjectType,
} = require('graphql');

const { schema: upgradeSchema } = require('./upgrade');
const { schema: configurationSchema } = require('./configuration');


module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      upgrade: upgradeSchema.query.upgrade,
      configuration: configurationSchema.query.configuration,
    },
  }),
});
