const {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLUnionType,
} = require('graphql');


const {
  FeaturesType,
} = require('./features/types');


const ConfigurationType = new GraphQLObjectType({
  name: 'Configuration',
  fields: {
    features: { type: new GraphQLNonNull(FeaturesType) },
  },
});


module.exports = {
  ConfigurationType,
  FeaturesType,
};
