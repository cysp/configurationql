const {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLBoolean,
} = require('graphql');


const FeaturesType = new GraphQLObjectType({
  name: 'Features',
  fields: {
    featureOne: { type: new GraphQLNonNull(GraphQLBoolean) },
  },
});


module.exports = {
  FeaturesType,
};

