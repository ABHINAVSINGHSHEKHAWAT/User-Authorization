const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const router = express.Router();

// Show register page
router.get("/register", (req, res) => {
  res.render("register");
});

// Handle signup
router.post("/register", async (req, res) => {
  
    try {
    const { name, email, password } = req.body;

    // 1️⃣ Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.send("User already exists");
    }

    // 2️⃣ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3️⃣ Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.redirect("/login");
  } catch (error) {
    console.error(error);
    res.send("Error during registration");
  }
});


// Show login page
router.get("/login", (req, res) => {
  res.render("login");
});

// Handle login
router.post("/login", async (req, res) => {

  try {
    const { email, password } = req.body;

    // 1️⃣ Check user
    const user = await User.findOne({ email });
    if (!user) {
      return res.send("Invalid email or password");
    }

    // 2️⃣ Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.send("Invalid email or password");
    }

    // 3️⃣ Create JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { 
                //jwt.sign(payload,secretKey,options)

      expiresIn: "1d",
    });

    // 4️⃣ Store JWT in cookie
    res.cookie("token", token, {
      httpOnly: true
    });

    res.redirect("/dashboard");
  } catch (error) {
    console.error(error);
    res.send("Login error");
  }
});

module.exports = router;
