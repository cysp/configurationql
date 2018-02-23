const {
    GraphQLObjectType,
    GraphQLString,
} = require('graphql');

const UpgradeActionType = require('./UpgradeAction');


module.exports = new GraphQLObjectType({
    name: 'UpgradeDetail',
    fields: {
        action: { type: UpgradeActionType },
        message: { type: GraphQLString },
    },
});
