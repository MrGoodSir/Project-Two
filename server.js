const express = require('express')
const app = express();
const mongoose = require('mongoose')
const armorRouter = require('./controllers/armors')
const startRouter = require('./controllers/start')
const homeRouter = require('./controllers/home')
const weaponRouter = require('./controllers/weapons')
const equipmentRouter = require('./controllers/equipment')
const armorSeed = require('./models/Seeds/armorSeed')
const equipmentSeed = require('./models/Seeds/equipmentSeed')
const weaponSeed = require('./models/Seeds/weaponSeed')
require('dotenv').config()




const DATABASE_URL = process.env.DATABASE_URL

mongoose.connect(DATABASE_URL)
const db = mongoose.connection


db.on('connected', () => { console.log("MongoDB is Connected...") })
db.on('error', (error) => console.log('MongoDB Error ' + error.message));

app.use('/home/armor', armorRouter)
app.use('/home/equipment', equipmentRouter)
app.use('/home/weapons', weaponRouter)
app.use('/home', homeRouter)
app.use(startRouter)









const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Express is listening on port: ${PORT}`)
})