const client = require("../redis");

const getRedisInstance = async (req, res, next) => {
  if (client.connected) {
    console.log("CACHED");
    req.redis = client;
    return next();
  }

  console.log("REDIS NOT CONNECTED CACHE WILL BE FORWARDED");
  return next();
};

module.exports = getRedisInstance;
