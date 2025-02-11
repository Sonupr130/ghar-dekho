const mongoose = require("mongoose");

require("dotenv").config();

const dbConnection = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log("Database Connected 🔥"))
    .catch((err) => console.log(err.message));
};

module.exports = dbConnection;
