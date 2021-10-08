const mongoose = require('mongoos');
const Schema = mongoose.Schema;

const armorSchema = new Schema({
    name: String,
    description: String,
    weight: Number,
    price: Number
})

const Armor = mongoose.model('Armor', armorSchema)

module.exports = Armor;