const express = require("express");
const app=express();


const mongoose= require("mongoose");
const bodyparser = require('body-parser')

const cors= require("cors");
const userRouter= require("./routes/userRouters");



app.use(cors());

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

mongoose.connect("mongodb://127.0.0.1:27017/jwt12pm").then(()=>{
    console.log("Data base Connected!");
})

app.use("/user", userRouter);

app.listen(8000, ()=>{
    console.log("server run on 8000 Port!");
})