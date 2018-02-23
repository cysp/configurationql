const {
    // GraphQLNonNull,
    GraphQLObjectType,
    // GraphQLString,
    // GraphQLUnionType,
} = require('graphql');


module.exports = new GraphQLObjectType({
    name: 'SuggestedUpgradeDetail',
    fields: {
        // version: { type: new GraphQLNonNull(GraphQLString) },
    },
});