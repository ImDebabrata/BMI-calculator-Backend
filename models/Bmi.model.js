const mongoose = require("mongoose");

const bmiSchema = mongoose.Schema({
  userid: String,
  bmi: Number,
  status: String,
});

const BmiModel = mongoose.model("bmi", bmiSchema);
module.exports = { BmiModel };
