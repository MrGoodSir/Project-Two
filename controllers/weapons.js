const express = require('express')
const weaponRouter = express.Router();


weaponRouter.get('/', (req, res) => {
    res.render('../views/weapons/index.ejs')
})













module.exports = weaponRouter