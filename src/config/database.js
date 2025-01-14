const mongoose = require("mongoose");
const Config = require(".");

exports.connect = () => {
  mongoose.connect(Config.DB_URL)
    .then(() => console.log("DB Connected Successfully"))
    .catch((error) => {
      console.log("DB Connection Failed");
      console.error(error);
      process.exit(1);
    });
};
