const mongoose = require("mongoose");
const dotenv = require("dotenv");

// load env file
dotenv.config();

const CntactDB = async () => {
  mongoose
    .connect(process.env.DBURL)
    .then(() => console.log("MongoDB is connected"))
    .catch((err) => console.log("MongoDB Error:", err));
};

module.exports = CntactDB;
