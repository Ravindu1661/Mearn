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
    
}, { timestamps: true })    