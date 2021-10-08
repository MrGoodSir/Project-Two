const express = require('express')
const armorRouter = express.Router();


armorRouter.get('/', (req, res) => {
    res.send("This is the Armor page")
})














module.exports = armorRouter