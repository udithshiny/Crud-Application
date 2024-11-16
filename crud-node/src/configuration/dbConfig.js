// dbConfig.js
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/crud_db", { 
});

mongoose.connection.on("connected", () => {
    console.log("Connected to MOngoDB");
});

mongoose.connection.on("error", (err) => {
    console.error(`MongoDB connection error: ${err}`);
});
        

module.exports = mongoose;
