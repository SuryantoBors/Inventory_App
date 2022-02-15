//required package
const express = require("express");
const path = require("path")
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//required routes
const signup = require("./routes/signup");
const signin = require("./routes/signin");

const app = express();
dotenv.config();
//local mongo db connection
// mongoose.connect("mongodb://localhost:27017/user",(err)=>{;

//mongobd atlas connection, get access using dotenv files
mongoose.connect(`${process.env.MONGODB_ACCESS}`, (err)=>{
    if (err) {
        console.log(err);
    }else{
        console.log("success connect to database");
    }
}); // 

app.use(express.json());
app.use(cors());

app.use("/signup", signup);
app.use("/signin", signin);

//port listener, port using dotenv files
app.listen(process.env.PORT, ()=>{
    console.log(`listen from port ${process.env.PORT}`);
});