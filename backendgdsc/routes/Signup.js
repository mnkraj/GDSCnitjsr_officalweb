const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");
router.post("/signup", async (req, res) => {
  let { name, email, password } = req.body;
  email = email.toLowerCase()
  const user= await Admin.findOne({email})
  
  const salt = await bcrypt.genSalt(14);
  const secpwd = await bcrypt.hash(password, salt);
  try {
    if(user){
      return res.json({success:false,message:"user already exist with this email"})
    }
    Admin.create({
      name: name,
      email: email,
      password: secpwd,
    });
     
    res.json({ success: true ,email:email});
  } catch (e) {
    res.json({ success: false , message : "Internal Server Error" });
  }
});

module.exports = router;
