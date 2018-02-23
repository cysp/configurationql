const {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLScalarType,
} = require('graphql');


const {
  FeaturesType,
} = require('./features/types');


const ColorType = new GraphQLScalarType({
  name: 'Color',
  serialize: (value) => value,
});

const SeasonalColorPaletteType = new GraphQLObjectType({
  name: 'SeasonalColorPalette',
  fields: {
    color: { type: new GraphQLNonNull(ColorType) },
    lightColor: { type: new GraphQLNonNull(ColorType) },
    darkColor: { type: new GraphQLNonNull(ColorType) },
  }
});

const ColorPaletteType = new GraphQLObjectType({
  name: 'ColorPalette',
  fields: {
    seasonal: { type: SeasonalColorPaletteType },
  }
});

const ConfigurationType = new GraphQLObjectType({
  name: 'Configuration',
  fields: {
    features: { type: new GraphQLNonNull(FeaturesType) },
    colors: { type: ColorPaletteType },
  },
});


module.exports = {
  ConfigurationType,
  FeaturesType,
  ColorType,
  ColorPaletteType,
  SeasonalColorPaletteType,
};
