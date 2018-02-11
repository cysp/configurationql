const configuration = {
};


const resolve = (obj, target) => {
  return obj;
};


exports.resolver = (obj, args, context, info) => {
  return resolve(configuration, args.target);
};

