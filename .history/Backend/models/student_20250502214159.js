const mongoose = require('mongoose')
const schema = mongoose.Schema

const studentSchema = new schema({
    name: {
        type: String,
        required: true
    },
   age: {
        type: Number,
        required: true
    }
    gender: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, { timestamps: true })    