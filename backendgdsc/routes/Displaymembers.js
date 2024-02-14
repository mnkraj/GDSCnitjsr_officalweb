const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Member = require("../models/model")
router.get('/displaymembers', async (req, res) => {
    // let { title,category,date,startTime,endTime,description,thumnail } = req.body;
    // //email = email.toLowerCase()
    try {
       const response = await Member.find({})
        res.json(response);
      } catch (e) {
        res.json({ success: false , message : "Internal Server Error" });
      }
  });

  module.exports = router;