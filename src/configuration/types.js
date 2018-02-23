const {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLScalarType,
  GraphQLString,
  GraphQLUnionType,
} = require('graphql');


const {
  FeaturesType,
} = require('./features/types');


const ColorType = new GraphQLScalarType({
  name: 'Color',
  serialize: (value) => value,
});

const ConfigurationType = new GraphQLObjectType({
  name: 'Configuration',
  fields: {
    features: { type: new GraphQLNonNull(FeaturesType) },
    colors: { type: new GraphQLObjectType({
      name: 'ColorPalette',
      fields: {
        seasonalColor: { type: ColorType },
        lightSeasonalColor: { type: ColorType },
        darkSeasonalColor: { type: ColorType },
      }
    })}
  },
});


module.exports = {
  ConfigurationType,
  FeaturesType,
  ColorType,
};
