module.exports = {
  query: require('./schema/query'),
}
/*
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
*/
