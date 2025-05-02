// සර්වරය සඳහා අවශ්‍ය පැකේජ (ලයිබ්‍රරි) ආයාත කිරීම
const express = require('express')       // වෙබ් සර්වරයක් සෑදීමට භාවිතා කරන ප්‍රධාන framework එක
const cors = require('cors')             // විවිධ domains වලට අපගේ API එකට ප්‍රවේශ වීමට ඉඩ දෙයි
const mongoose = require('mongoose')     // MongoDB දත්ත සමුදාය සමඟ සම්බන්ධ වීමට හා වැඩ කිරීමට භාවිතා කරයි
const bodyParser = require('body-parser') // එන ඉල්ලීම් ශරීර (request bodies) විශ්ලේෂණය කිරීමට උපකාරී වේ
//const dotnev = require('dotenv')       // මෙම පේළිය comment කර ඇත, මන්ද යත් අපි පහත පේළිය භාවිතා කරන නිසාය
const app = express()                    // express යෙදුම සෑදීම
require('dotenv').config()               // .env ගොනුවෙන් පරිසර විචල්‍යයන් පූරණය කිරීම

// පරිසර විචල්‍යයන්ගෙන් port අංකය සැකසීම හෝ එසේ නොමැති නම් 5000 භාවිතා කිරීම
const port = process.env.PORT || 5000

// Middleware සැකසුම
app.use(cors())                         // සියලුම මාර්ගවල CORS සක්‍රීය කිරීම
app.use(bodyParser.json())              // JSON ඉල්ලීම් ශරීර විශ්ලේෂණය කිරීම

// පරිසර විචල්‍යයන්ගෙන් MongoDB සම්බන්ධතා URL ලබා ගැනීම
const URL = process.env.MONGODB_URL;

// MongoDB දත්ත සමුදාය සමඟ සම්බන්ධ වීම
mongoose.connect(URL, {
    useNewUrlParser: true,              // අනුපත්තා අනතුරු ඇඟවීම් වළක්වා ගැනීමට නව URL විශ්ලේෂකය භාවිතා කරන්න
    useUnifiedTopology: true            // නව සම්බන්ධතා කළමනාකරණ එන්ජිම භාවිතා කරන්න
})

// දත්ත සමුදාය සම්බන්ධතාව නිරීක්ෂණය කිරීමට සම්බන්ධතා වස්තුවක් සෑදීම
const connection = mongoose.connection;
connection.once('open', () => {          // සම්බන්ධතාවය සාර්ථකව ස්ථාපිත වූ විට
    console.log('MongoDB connection success!')  // console එකට සාර්ථක පණිවිඩයක් ලොග් කරන්න
})

// සර්වරය ආරම්භ කර නියමිත port එකෙහි සවන්දීම
app.listen(port, () => {
    console.log(`Server is up and running on port is ${port}`)  // සර්වරය ආරම්භ වන විට පණිවිඩයක් ලොග් කරන්න
})