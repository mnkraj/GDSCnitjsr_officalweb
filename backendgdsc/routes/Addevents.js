const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Event = require("../models/Events")
router.post('/addevents', async (req, res) => {
    let { title,category,date,startTime,endTime,description,thumnail } = req.body;
    //email = email.toLowerCase()
    try {
        Event.create({
          title: title,
          category: category,
          date: date,
          startTime:startTime,
          endTime:endTime,
          description:description,
          thumnail:thumnail
        });
        res.json({ success: true });
      } catch (e) {
        res.json({ success: false , message : "Internal Server Error" });
      }
  });

  module.exports = router;