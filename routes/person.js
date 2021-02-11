const express = require("express");
const getRedisInstance = require("../middlewares/redis");
const { promisify } = require("util");
const router = express.Router();

router.get("/", getRedisInstance, async (req, res) => {
  const { redis } = req;
  if (redis) {
    redis.set("languages", "portuguese");

    const getAsync = promisify(redis.get).bind(redis);

    const data = await getAsync("languages");

    return res.send({ cache: data });
  }

  return res.send("NO CACHE");
});

module.exports = router;
