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
    const update = await Student.findByIdAndUpdate(userId, updateStudent)  //findbyone දුන්නම යූසර්ගේ නම,id,nic නම්බර්ස් ඇතුලත් කොට ඔහුගේ විස්තර අප්ඩේට් කරන්න්න පුලලුවන්

        .then(() => {
            res.status(200).send({ status: "User updated", })
        }).catch((err) => {
            console.log(err)
            res.status(500).send({ status: "Error with updating data", error: err.message })
        })
})


router.route('/delete/:id').delete(async (req, res) => {
let userId = req.params.id
    await Student.findByIdAndDelete(userId)
    .then(() => {
            res.status(200).send({ status: "User deleted" })
        }).catch((err) => {
            console.log(err.message)
            res.status(500).send({ status: "Error with delete user", error: err.message })
        })
});


// router.route('/get/:id').get(async (req, res) => {
//     let userId = req.params.id
//     const user = await Student.findById(userId)
//         .then((student) => {
//             res.status(200).send({ status: "User fetched", student })
//         }).catch((err) => {
//             console.log(err.message)
//             res.status(500).send({ status: "Error with get user", error: err.message })
//         })
// })

router.route('/get/:id').get(async (req, res) => {
    let userId = req.params.id
    const user = await Student.findById(userId)
        .then(() => {
            res.status(200).send({ status: "User fetched", Student })
        }).catch((err) => {
            console.log(err.message)
            res.status(500).send({ status: "Error with get user", error: err.message })
        })
})




module.exports = router 