const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
    max: 255
  },
  title: {
    type: String,
    required: true,
    max: 255
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Jobs", jobSchema);
