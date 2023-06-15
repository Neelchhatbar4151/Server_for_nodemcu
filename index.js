const express = require("express");
const R = express.Router();

let t = 10;
R.get("/",(req,res)=>{
      console.log(t)
      return res.status(200).json({ status: 200 });
})

R.get("/read/:te", (req,res)=>{
      console.log("Hii")
      const {te} = req.params;
      console.log(req.params)
      t = te;
      console.log("Post: "+t)
      return res.status(200).json({status: 200});
})


module.exports = R