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
  UpgradeSuggestionType,
  SuggestedUpgradeType,
  MandatoryUpgradeType,
} = require('./types');


module.exports = new GraphQLSchema({
  types: [
    TargetType,
    UpgradeSuggestionType,
    SuggestedUpgradeType,
    MandatoryUpgradeType,
  ],
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      upgrade: {
        type: UpgradeSuggestionType,
        args: {
          target: {
            type: new GraphQLNonNull(TargetType),
          },
        },
        resolve: (parent, { target }, ctx, info) => {
          if (target.platform.platform == 'iOS') {
            if (target.version < '1.0.0') {
              return {
                __resolveType: 'MandatoryUpgrade',
                version: '2.0.0',
                reason: 'We turned old stuff off.',
              };
            }
            if (target.version < '2.0.0') {
              return {
                __resolveType: 'SuggestedUpgrade',
                version: '2.0.0',
              };
            }
          }
          return null;
        }
      },
    },
  }),
});
