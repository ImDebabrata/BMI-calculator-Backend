const express = require("express");
var jwt = require("jsonwebtoken");
const { BmiModel } = require("../models/Bmi.model");
const bmiRouter = express.Router();

bmiRouter.post("/calculate", async (req, res) => {
  const { height, weight } = req.body;
  console.log("weight:", weight);
  console.log("height:", height);
  res.send({ res: "Bmi Calculate route" });
});

module.exports = { bmiRouter };
