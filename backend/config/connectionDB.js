const mongoose =  require('mongoose');
const connectMongoDB = async () => {
    
    await mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });
};



module.exports = connectMongoDB;