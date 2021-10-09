const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const equipmentSchema = new Schema({

    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    quanity: { type: Number, required: true }

}, { timestamps: true });

const Equipment = mongoose.model('Equipment', equipmentSchema)

module.exports = Equipment;