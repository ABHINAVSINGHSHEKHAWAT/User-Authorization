const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1); //What if I remove process.exit(1)? Server will still run But DB-dependent routes will break Leads to hidden bugs 
  }
                        

    
  };

module.exports = connectDB;
