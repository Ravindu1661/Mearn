const mongoose = require('mongoose')
const schema = mongoose.Schema

const studentSchema = new schema({
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