const {
  GraphQLEnumType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');


const PlatformPlatformType = new GraphQLEnumType({
  name: 'PlatformPlatform',
  values: {
    iOS: { },
    Android: { },
  },
});

const PlatformType = new GraphQLInputObjectType({
  name: 'Platform',
  fields: {
    platform: { type: new GraphQLNonNull(PlatformPlatformType) },
    version: { type: new GraphQLNonNull(GraphQLString) },
  },
});

const TargetType = new GraphQLInputObjectType({
  name: 'Target',
  fields: {
    platform: { type: new GraphQLNonNull(PlatformType) },
    version: { type: new GraphQLNonNull(GraphQLString) },
  },
});


module.exports = {
  TargetType,
  PlatformType,
  PlatformPlatformType,
};

