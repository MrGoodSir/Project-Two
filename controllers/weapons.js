const express = require('express')
const weaponRouter = express.Router();


weaponRouter.get('/', (req, res) => {
    res.send("This is the Weapons page")
})













module.exports = weaponRouter