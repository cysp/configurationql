const fs = require('fs');
const path = require('path');
const {
  mergeSchemas,
} = require('graphql-tools');

const {
  schema: upgradeSchema,
} = require('./upgrade');

const {
  schema: configurationSchema,
} = require('./configuration');


exports.schema = mergeSchemas({
  schemas: [
    upgradeSchema,
    configurationSchema,
  ],
});
