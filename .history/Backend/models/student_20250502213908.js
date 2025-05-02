const mongoose = require('mongoose')
const Student = mongoose.Schema

const schema = new schema({
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