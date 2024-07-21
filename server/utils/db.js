const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;

const connectdb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection error:", error.message);
    process.exit(1); // Use 1 to indicate an error
  }
};

module.exports = connectdb;
