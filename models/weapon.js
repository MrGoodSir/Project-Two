const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const weaponSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    weight: { type: Number, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: false },
    quanity: { type: Number, required: true }
})

const Weapon = mongoose.model('Weapon', weaponSchema)

module.exports = Weapon;