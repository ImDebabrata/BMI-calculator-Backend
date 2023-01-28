const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connection } = require("./config/db");
const { loginRouter } = require("./routes/login.route");
const { signupRouter } = require("./routes/signup.route");
const { bmiRouter } = require("./routes/bmi.route");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send({ res: "Welcome to the BMI server" });
});

app.use("/login", loginRouter);
app.use("/signup", signupRouter);
app.use("/bmi", bmiRouter);

app.listen(PORT, async () => {
  try {
    await connection;
    // console.log(connection);
    console.log("Connecting to DB successfully");
  } catch (err) {
    console.log(err);
    console.log("Error while connecting to DB");
  }
  console.log(`listening on port ${PORT}`);
});
