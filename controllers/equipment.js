const express = require('express')
const equipmentRouter = express.Router();


equipmentRouter.get('/', (req, res) => {
    res.render('../views/equipment/index.ejs')
})











module.exports = equipmentRouter