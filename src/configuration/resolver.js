const configuration = {
  features: {
    featureOne: {
      '.conditional': (target) => {
        if (target.platform.platform == 'iOS') {
          return true;
        }
        return false;
      },
    },
  },
  colors: {
    seasonal: {
      color: '#123456',
      lightColor: '#012345',
      darkColor: '#234567',
    },
  }
};


const resolve = (obj, target) => {
  if (obj == null) {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map((o) => {
      return resolve(o, target);
    });
  }
  if (typeof obj === "object" && obj['.conditional']) {
    obj = resolve(obj['.conditional'](target));
  }
  if (typeof obj === "object" && obj !== null) {
    var clone = {};
    for (const property in obj) {
      clone[property] = resolve(obj[property], target);
    }
    obj = clone
  }
  return obj;
};


module.exports = (parent, { target }, context, info) => {
  return resolve(configuration, target);
};
