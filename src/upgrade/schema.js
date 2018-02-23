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
  UpgradeActionType,
  UpgradeDetailType,
  SuggestedUpgradeDetailType,
  MandatoryUpgradeDetailType,
} = require('./types');


module.exports = {
  query: {
    upgrade: {
      type: UpgradeDetailType,
      args: {
        target: { type: new GraphQLNonNull(TargetType) },
      },
      resolve: (parent, { target }, ctx, info) => {
        if (target.platform.platform == 'iOS') {
          if (target.version < '1.0.0') {
            return {
              action: 'FORCE',
              reason: 'We turned old stuff off.',
            };
          }
          if (target.version < '2.0.0') {
            return {
              action: 'SUGGEST',
            };
          }
        }
        return null;
      }
    },
  },
};
