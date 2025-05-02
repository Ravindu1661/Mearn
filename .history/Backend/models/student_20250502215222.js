// MongoDB සමඟ සම්බන්ධ වීමට mongoose පැකේජය ආයාත කිරීම
const mongoose = require('mongoose')
// schema සඳහා කෙටි ප්‍රකාශන නාමයක් සැකසීම
const schema = mongoose.Schema

// ශිෂ්‍ය schema එක නිර්වචනය කිරීම - දත්ත සමුදායයේ වගුවේ ආකෘතිය
const studentSchema = new schema({
    name: {
        type: String,           // නම string ආකාරයේ විය යුතුය
        required: true          // නම අනිවාර්යයෙන් ඇතුලත් කළ යුතුය
    },
    age: {
        type: Number,           // වයස අංකයක් විය යුතුය
        required: true          // වයස අනිවාර්යයෙන් ඇතුලත් කළ යුතුය
    },
    gender: {
        type: String,           // ස්ත්‍රී පුරුෂ භාවය string ආකාරයේ විය යුතුය
        required: true          // ස්ත්‍රී පුරුෂ භාවය අනිවාර්යයෙන් ඇතුලත් කළ යුතුය
    },
    email: {
        type: String,           // ඊමේල් ලිපිනය string ආකාරයේ විය යුතුය
        required: true          // ඊමේල් ලිපිනය අනිවාර්යයෙන් ඇතුලත් කළ යුතුය
    }

}, { timestamps: true })    // නව record එකක් සෑදීමේදී හා යාවත්කාලීන කිරීමේදී timestamp එකතු කිරීම


// සකස් කළ schema එක භාවිතයෙන් 'student' නමින් model එකක් නිර්මාණය කිරීම
const Student = mongoose.model('student', studentSchema)
// වෙනත් ගොනු වලින් මෙම model එක භාවිතා කිරීමට හැකිවන පරිදි export කිරීම
module.exports = Student