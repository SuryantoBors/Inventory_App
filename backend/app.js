const express = require("express");
const mongoose = require("mongoose");
const app = express();
const  port = 5000;
const frontendDomain = "http://localhost:3000"

app.get("/",(req, res)=>{
    res.redirect(`${frontendDomain}/login`);
});

app.get("/", (req, res)=>{
    res.send("hello world")
});

app.listen(port, ()=>{
    console.log(`listen from port ${port}`);
});