const express = require("express");
const R = express.Router();
const Mongoose = require("mongoose");

const User = require("./UserScheme");

let t = 0;
R.get("/", (req, res) => {
      console.log(t)
      return res.status(200).json({ status: 200 });
})

const add = async (ce, fa) => {
      try {
            const user = new User({ Celsius: ce, Fahrenheit: fa });
            await user.save();
      } catch (error) {
            console.log(error);
      }
}

R.get("/read/:ce", async (req, res) => {
      const { ce } = req.params;
      t = ce;
      console.log("Celsius: " + t)
      const F = (t * 9) / 5 + 32
      console.log("Fahrenheit: " + F)
      await add(t, F);
      return res.status(200).json({ status: 200 });
})


module.exports = R