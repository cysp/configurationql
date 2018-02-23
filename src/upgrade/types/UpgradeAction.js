const {
    GraphQLEnumType,
} = require('graphql');


module.exports = new GraphQLEnumType({
    name: 'UpgradeAction',
    values: {
        SUGGEST: { },
        FORCE: { },
    },
});
