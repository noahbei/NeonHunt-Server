const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    Item: String,
    Type: String
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item