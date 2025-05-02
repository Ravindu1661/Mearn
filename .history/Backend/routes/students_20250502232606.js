const router = require('express').Router()
let Student = require('../models/student')

router.route('/').get((req, res) => {
    Student.find()
        .then(students => res.json(students))
        .catch(err => res.status(400).json('Error: ' + err))
})