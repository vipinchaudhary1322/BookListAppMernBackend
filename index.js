const mongoose = require('mongoose');
const app =require("./app");
require("dotenv").config();

const PORT = process.env.PORT || 8000 ;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017";

mongoose.connect(MONGODB_URI,{dbName:"books"},(err)=>{
    if(err){
        console.log("Mongoose connect");
        console.log(err);
    }
})
mongoose.connection.on("connected",()=>{
    console.log("DB Connected")
})



app.listen(PORT,()=>console.log("Server Running"))