const express = require("express");
const mongoose = require("mongoose");
const Product = require("./Product.js")
const bodyParser = require("body-parser");
const cors = require('cors');

mongoose
  .connect(
    "mongodb://localhost:27017/"
  )
  .then(() => {
    console.log("Mongoose Connected");
    const app = express();
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(cors())
    app.use(express.json());

    // get all in faculty
    app.get("/Product", async (req, res) => {
      const ans = await Product.find();
      res.send(ans);
    });

    //get by name in faculty
    app.get("/Product/:id", async (req, res) => {
      const ans = await Product.findOne({ id: req.params.id });
      res.send(ans);
    });

    //add faculty
    app.post("/Product", async (req, res) => {
      fact = new Product({ ...req.body });
      const ans = await fact.save();
      res.send(ans);
    });

    //delete data
    app.delete("/Product/:id", async (req, res) => {
      const ans = await Product.deleteOne({ id: req.params.id });
      res.send(ans);
    });

    //edit data
    app.patch("/Product/:id", async (req, res) => {
      const stu = await Product.findOneAndUpdate({ id:req.params.id },req.body);
      // stu.FirstName = req.body.FirstName;
      // const ans = await stu.save();
      res.send(stu);
    });

    const port = 3005;
    app.listen(port, () => {
      console.log(`Server Started @ ${port}`);
    });
  })
  .catch((err) => console.log("Errorr:", err));
