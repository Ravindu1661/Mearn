const router = require('express').Router()
let Student = require('../models/student')

router.route('/add').post((req, res) =>
    {
        const name = req.body.name
        const age = Number(req.body.age)
        const gender = req.body.gender
        const email = req.body.email
        const newStudent = new Student({
            name,
            age,
            gender,
            email
        })
        newStudent.save().then(() => {
            res.json('Student added')
        }).catch((err) => {
            console.log(err)
    })
})

router.route('/').get((req, res) => {
    Student.find().then((students) => {
        res.json(students)
    }).catch((err) => {
        console.log(err)
    })
})





module.exports = router 