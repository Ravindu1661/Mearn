const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
//const dotnev = require('dotenv')
const app = express()
require('dotenv').config()

const port = process.env.PORT || 5000


app.use(cors())
app.use(bodyParser.json())

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})


const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connection success!')
})


app.listen(port, () => {
    console.log(`Server is up and running on port is ${port}`)
})