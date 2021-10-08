const express = require('express')
const armorRouter = express.Router();




armorRouter.get('/', (req, res) => {
    res.render('../views/armors/index.ejs')
})











module.exports = armorRouter