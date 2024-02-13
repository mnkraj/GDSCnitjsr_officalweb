const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");
router.post("/signup", async (req, res) => {
  let { name, email, password } = req.body;
  email = email.toLowerCase()
  const salt = await bcrypt.genSalt(14);
  const secpwd = await bcrypt.hash(password, salt);
  try {
    Admin.create({
      name: name,
      email: email,
      password: secpwd,
    });
    res.json({ success: true });
  } catch (e) {
    res.json({ success: false , message : "Internal Server Error" });
  }
});

module.exports = router;
