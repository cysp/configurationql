const {
    // GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
    // GraphQLUnionType,
} = require('graphql');


module.exports = new GraphQLObjectType({
    name: 'MandatoryUpgradeDetail',
    fields: {
        // version: { type: new GraphQLNonNull(GraphQLString) },
        reason: { type: GraphQLString },
    },
});