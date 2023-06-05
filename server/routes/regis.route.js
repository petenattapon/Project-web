const express = require("express");
const router = express.Router();

const RegisUser = require("../models/User_model");

// Create a new user
router.post('/register/user', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await RegisUser.findOne({ email });

    if (existingUser) {
      res.json({ message: "User already registered" });
    } else {
      const user = new RegisUser({
        username,
        email,
        password
      });

      await user.save();
      res.json({ message: "User created successfully" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.post('/login/user', async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await RegisUser.findOne({ email });
    if (existingUser) {
      if (password === existingUser.password) {
        res.json({ message: "Login success", user: existingUser });
      } else {
        res.json({ message: "Incorrect password" });
      }
    } else {
      res.json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});






module.exports = router;
