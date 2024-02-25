// Add your mongodb cloud username and password and
// run the app using npm start you will see logs saying
// database connected.

require('dotenv').config()

const mongoose = require("mongoose");
const express = require("express");
const Item = require("./models/item");

const app = express();
app.use(express.json())

const dbURI = process.env.DATABASE_URL

mongoose
  .connect(dbURI)
  .then((result) =>
    app.listen(3000, (req, res) => {
      console.log("Connected to DB listening on port 3000");
    })
  )
  .catch((error) => console.log(error));

app.get('/items', async (req, res)=>{
    try{
        const items = await Item.find({})
        res.status(200).send(items)
    }catch(error){
        res.status(500).send(error)
    }
})



