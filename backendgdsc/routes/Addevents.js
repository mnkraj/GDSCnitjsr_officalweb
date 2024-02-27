const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Event = require("../models/Events")
router.post('/addevents', async (req, res) => {
    let { title,category,date,startTime,endTime,description,color } = req.body;
    console.log(req.file,req.file.path)
    //email = email.toLowerCase()
    try {
        Event.create({
          title: title,
          category: category,
          date: date,
          startTime:startTime,
          endTime:endTime,
          description:description,
          thumbnail: req.file.filename, // Use the filename provided by multer
          thumbnailurl:req.file.path,
          color:color
        });
        res.json({ success: true ,thumbnailurl:req.file.path});
      } catch (e) {
        res.json({ success: false , message : "Internal Server Error" });
      }
  });

  module.exports = router;