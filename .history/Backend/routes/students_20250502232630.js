const router = require('express').Router()
let Student = require('../models/student')

router.route('/add').post((req, res) =>