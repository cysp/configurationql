const {
    // GraphQLNonNull,
    // GraphQLObjectType,
    // GraphQLString,
    GraphQLUnionType,
} = require('graphql');

const SuggestedUpgradeDetailType = require('./SuggestedUpgradeDetail');
const MandatoryUpgradeDetailType = require('./MandatoryUpgradeDetail');


module.exports = new GraphQLUnionType({
    name: 'UpgradeDetail',
    types: [
        SuggestedUpgradeDetailType,
        MandatoryUpgradeDetailType,
    ],
    resolveType: (obj) => {
        switch (obj.__resolveType) {
            case 'SuggestedUpgrade':
                return SuggestedUpgradeDetailType;
            case 'MandatoryUpgrade':
                return MandatoryUpgradeDetailType;
        }
    }
});
