const mongoose = require('mongoose')
const StudentShemas = mongoose.Schema

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