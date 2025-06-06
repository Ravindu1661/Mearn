const router = require('express').Router()
let Student = require('../models/student')

router.route('/add').post((req, res) => {
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




router.route('/update/:id').put(async (req, res) => {
    let userId = req.params.id
    const { name, age, gender, email } = req.body

    const updateStudent = {
        name,
        age,
        gender,
        email
    }
    const update = await Student.findByIdAndUpdate(userId, updateStudent)  //findbyone දුන්නම යූසර්ගේ නම,id,nic නම්බර්ස් ඇතුලත් කොට 

        .then(() => {
            res.status(200).send({ status: "User updated",user: update })
        }).catch((err) => {
            console.log(err)
            res.status(500).send({ status: "Error with updating data", error: err.message })
        })
})








module.exports = router 