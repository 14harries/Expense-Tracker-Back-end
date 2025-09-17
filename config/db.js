const  mongoose=require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        console.log(process.env.mongodbURL);
        await mongoose.connect(process.env.mongodbURL)
            // serverSelectionTimeoutMS: 10000,
            // socketTimeoutMS: 45000,
        
         console.log("Database Connected");
    }catch (error) {
        console.log("Mongodb Connection Error",error);
        
    }
}
module.exports = connectDB;