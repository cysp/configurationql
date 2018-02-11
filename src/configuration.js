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


exports.resolver = (obj, args, context, info) => {
  return resolve(configuration, args.target);
};

