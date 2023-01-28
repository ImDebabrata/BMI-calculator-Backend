const express = require("express");
var jwt = require("jsonwebtoken");
const { BmiModel } = require("../models/Bmi.model");
const bmiRouter = express.Router();

bmiRouter.post("/calculate", async (req, res) => {
  const { height, weight } = req.body;
  console.log("weight:", weight);
  console.log("height:", height);
  try {
    let heightInMeter = height / 3;
    heightInMeter = heightInMeter.toFixed(2);
    let bmi = weight / heightInMeter;
    bmi = bmi.toFixed(2);

    let userDetails = await UserModel.findOne({ _id: UserId });
    let { bmiHistory } = userDetails;
    let data = { height, weight, bmi };
    bmiHistory.push(data);
    res.status(200).send({ res: bmi });
  } catch (err) {
    res.send({ res: "Something went wrong somewhere" });
    console.log(err);
  }
});

module.exports = { bmiRouter };
