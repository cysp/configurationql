const {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLUnionType,
} = require('graphql');


const SuggestedUpgradeType = new GraphQLObjectType({
  name: 'SuggestedUpgrade',
  fields: {
    version: { type: new GraphQLNonNull(GraphQLString) },
  },
});

const MandatoryUpgradeType = new GraphQLObjectType({
  name: 'MandatoryUpgrade',
  fields: {
    version: { type: new GraphQLNonNull(GraphQLString) },
    reason: { type: GraphQLString },
  },
});

const UpgradeSuggestionType = new GraphQLUnionType({
  name: 'UpgradeSuggestion',
  types: [SuggestedUpgradeType, MandatoryUpgradeType],
  resolveType: (obj) => {
    switch (obj.__resolveType) {
      case 'SuggestedUpgrade':
        return SuggestedUpgradeType;
      case 'MandatoryUpgrade':
        return MandatoryUpgradeType;
    }
  }
});


module.exports = {
  SuggestedUpgradeType,
  MandatoryUpgradeType,
  UpgradeSuggestionType,
};

