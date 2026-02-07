const express = require("express");
const app =express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();


app.use(express.json());
app.use(express.urlencoded({ extended :true }));
app.use(cookieParser());

connectDB();// this is a callback function from db.js to connect to mongodb 

app.set("view engine", "ejs");

app.get("/", (req,res)=>{
    res.send("server is running ");
})

const authRoutes = require("./routes/authRoutes");

app.use("/", authRoutes);//“Use all routes defined inside authRoutes starting from /” very imp understand this line of code and its meaning   If inside authRoutes.js you have:router.get("/login", ...) And in server.js you have:app.use("/", authRoutes); Final URL becomes:http://localhost:3000/login





const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})
