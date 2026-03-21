const mongoose = require("mongoose");

const connectDB = async () => {
  try {
<<<<<<< HEAD
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB is connected");
=======
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 30000
    });

    console.log("MongoDB connected ✅");
>>>>>>> acce11032fdc7d73bba68a59838206d067433e63
  } catch (error) {
    console.log("DB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
