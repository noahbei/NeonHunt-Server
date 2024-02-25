// Add your mongodb cloud username and password and
// run the app using npm start you will see logs saying
// database connected.

require('dotenv').config()

const mongoose = require("mongoose");
const express = require("express");
const Item = require("./models/item");
const cors = require("cors")

const app = express();
app.use(express.json())
app.use(cors())

const dbURI = process.env.DATABASE_URL

mongoose
  .connect(dbURI)
  .then((result) =>
    app.listen(3000, (req, res) => {
      console.log("Connected to DB listening on port 3000");
    })
  )
  .catch((error) => console.log(error));

app.get('/items/:type', async (req, res)=>{
  console.log("requested")
    try{
        const type = req.params.type;
        console.log('Type:', type);
        const items = await Item.find({Type: type})
        res.status(200).send(items)
    }catch(error){
        res.status(500).send(error)
    }
})



