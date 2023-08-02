const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected Successfully");
  } catch (err) {
    console.log("DB Connection Failed");
    console.log(err);
    process.exit(1);
  }
};
