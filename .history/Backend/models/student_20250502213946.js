const mongoose = require('mongoose')
const schema = mongoose.Schema

const studentchema = new schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    rollno: {
        type: Number,
        required: true
    }
}, { timestamps: true })    