const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
const randomstring = require('randomstring');
const nodemailer = require('nodemailer');
const bcrypt = require("bcrypt");
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
      user: '2022ugcs097@nitjsr.ac.in',
      pass: 'harshitsribsc26092003@',
  }
});

router.post("/signup", async (req, res) => {
  let { name, email, password } = req.body;
  email = email.toLowerCase()
  const user= await Admin.findOne({email})
  const verificationToken = randomstring.generate({
    length: 64,
    charset: 'url-safe'
  });
  const salt = await bcrypt.genSalt(10);
  const secpwd = await bcrypt.hash(password, salt);
  try {
    if(user){
      return res.json({success:false,message:"user already exist with this email"})
    }
    Admin.create({
      name: name,
      email: email,
      password: secpwd,
      verificationToken: verificationToken
    });
    const mailOptions = {
      from: '2022ugcs097@nitjsr.ac.in',
      to: "mayankraj7100@gmail.com",
      subject: 'Email Verification',
      html: `Someone with the name :  ${name} and Email id : ${email} just registered on the GDSC Admin portal.<br> Click here http://localhost:3080/api/v1/verify/${verificationToken} to verify ${name}.`
    };
    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          if (error.code === 'EAUTH') {
              console.error('Authentication failed:', error);
          } else if (error.code === 'ENETUNREACH') {
              console.error('Network unreachable:', error);
          } else {
              console.error('Error sending email:', error);
          }
      } else {
          console.log('Email sent successfully:', info.response);
      }});
    res.json({ success: true ,email:email});
  } catch (e) {
    res.json({ success: false , message : "Internal Server Error" });
  }
});

module.exports = router;
