const express = require("express");
const router = express.Router();

const RegisUser = require("../models/User_model");

// Create a new user
router.post('/register/user', async (req, res) => {
        createdAt: new Date()
  const { firstname, lastname, email, password, createdAt} = req.body;

  try {
    const existingUser = await RegisUser.findOne({ email });

    if (existingUser) {
      res.json({ message: "User already registered" });
    } else {
      const user = new RegisUser({
        firstname,
        lastname,
        email,
        password,
        createdAt: new Date()
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

router.get("/login/user", async (req, res, next) => {
  try {
    const users = await RegisUser.find(); // Retrieve all users
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.delete("/user/delete_user/:id", async (req, res, next) => {
  try {
    const users = req.params.id;
    const user = await RegisUser.findByIdAndDelete(users);
    res.json({ message: "Tape created successfully" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
