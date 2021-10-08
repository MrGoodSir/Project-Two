const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const armorSchema = new Schema({

    name: { type: String, required: true },
    description: { type: String, required: true },
    weight: { type: Number, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true }

}, { timestamps: true });

const Armor = mongoose.model('Armor', armorSchema)

module.exports = Armor;