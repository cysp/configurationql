const {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');

const UpgradeActionType = require('./UpgradeAction');


module.exports = new GraphQLObjectType({
  name: 'UpgradeDetail',
  fields: {
    action: { type: new GraphQLNonNull(UpgradeActionType) },
    message: { type: GraphQLString },
  },
});
