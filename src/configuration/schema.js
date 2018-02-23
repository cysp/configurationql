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


module.exports = {
  query: {
    configuration: {
      type: ConfigurationType,
      args: {
        target: { type: new GraphQLNonNull(TargetType) },
      },
      resolve: resolver,
    },
  }
};
