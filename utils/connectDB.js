// import mongoose from "mongoose";

// const dbConnection = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI);

//     console.log("Database Connected");
//   } catch (error) {
//     console.log("DB Error: " + error);
//   }
// };

// export default dbConnection;
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGO_URI || process.env.MONGODB_URI;

const dbConnection = async () => {
  try {
    await mongoose.connect(uri, { serverSelectionTimeoutMS: 10000 });
    console.log("✅ Database Connected Successfully");
  } catch (error) {
    console.error("❌ DB Error:", error.message);
  }
};

export default dbConnection;
