const express = require('express');
const app = express();

const cors = require('cors')

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("Bom Bhole")
});


module.exports = app;