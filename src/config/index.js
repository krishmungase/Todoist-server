const { config } = require("dotenv");
config();

const { PORT, NODE_ENV, DB_URL } = process.env;

console.log("PORT", PORT);

const Config = {
  PORT,
  NODE_ENV,
  DB_URL
}

module.exports = Config;