const {
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLUnionType,
    GraphQLSchema,
    GraphQLString,
} = require('graphql');

const {
    TargetType,
} = require('../../../types');

const {
    ConfigurationType,
    FeaturesType,
} = require('../../types');

const resolver = require('./configuration/resolver');


module.exports = {
    type: ConfigurationType,
    args: {
        target: { type: new GraphQLNonNull(TargetType) },
    },
    resolve: resolver,
};