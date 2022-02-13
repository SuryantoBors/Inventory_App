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
mongoose.connect(`${process.env.MONGODB_ACCESS}`, (err)=>{
    if (err) {
        console.log(err);
    }else{
        console.log("success connect to database");
    }
}); // 
// mongoose.connect("mongodb://localhost:27017/user");
app.use(express.json());
app.use(cors());

app.use("/signup", signup);
app.use("/signin", signin);

const  port = 5000;
// const frontendDomain = "http://localhost:3000"

// app.get("/",(req, res)=>{
//     res.redirect(`${frontendDomain}/login`);
// });

// app.post("/loginverify", (req,res)=>{
//     const loginUsername = req.body.Username;
//     const loginPassword = req.body.Password;

//     userModel.find({username : loginUsername}, (err, userData)=>{
//         if(userData){
//             if(userData.password = loginPassword){
//                 res.status(200).redirect(`/dashboard`);
//             }else{
//                 console.log("wrong pwd");
//             }
//         }else{
//             console.log(err);
//         }
//     });
// });

// app.get("/dashboard", (req,res)=>{
//     res.redirect(`${frontendDomain}/dashboard`);
// });

app.listen(port, ()=>{
    console.log(`listen from port ${port}`);
});