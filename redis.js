const redis = require("redis");
const client = redis.createClient("redis://127.0.0.1:6379");

client.on("error", (err) => {
  console.log("REDIS NOT CONNECTED");
});

client.on("connect", (err) => {
  console.log("REDIS NOT CONNECTED");
});

module.exports = client;
