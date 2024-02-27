const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  registration: {
    type: String,
    required: true,
  },
    name: {
      type: String,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    teamType: {
      type: String,
      enum: ['lead', 'core team member'],
      required: true,
    },
    team: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
  
    profilePhoto: {
      type: String, // Assuming the profile photo is stored as a URL or file path
    },
    imageurl: {
      type: String, // Assuming the profile photo is stored as a URL or file path
    },
  });
  
const model = mongoose.model("model", schema);
module.exports = model;
