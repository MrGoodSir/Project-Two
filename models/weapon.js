const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const weaponSchema = new Schema({
    name: String,
    description: String,
    weight: Number,
    price: Number
})

const Weapon = mongoose.model('Weapon', weaponSchema)

module.exports = Weapon;