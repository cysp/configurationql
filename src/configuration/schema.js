const {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLUnionType,
  GraphQLSchema,
  GraphQLString,
} = require('graphql');

const {
  TargetType,
} = require('../types');

const {
  ConfigurationType,
  FeaturesType,
} = require('./types');

const resolver = require('./resolver');


module.exports = new GraphQLSchema({
  types: [
    TargetType,
    ConfigurationType,
    FeaturesType,
  ],
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      configuration: {
        type: ConfigurationType,
        args: {
          target: {
            type: new GraphQLNonNull(TargetType),
          },
        },
        resolve: resolver,
      },
    },
  }),
});
