const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const equipmentSchema = new Schema({
    name: String,
    description: String,
    weight: Number,
    price: Number
})

const Equipment = mongoose.model('Equipment', equipmentSchema)

module.exports = Equipment;