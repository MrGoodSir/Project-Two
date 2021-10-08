const express = require('express')
const weaponRouter = express.Router();


weaponRouter.get('/home/weapons', (req, res) => {
    res.render('../views/weapons/index.ejs')
})













module.exports = weaponRouter