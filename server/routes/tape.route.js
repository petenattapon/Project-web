let mongoose = require('mongoose')
    express = require('express')
    router = express.Router()

// Tape model
let productSchema = require('../models/TapeRequest')

// Create a new product
router.post('/requests',(req, res, next) => {
    productSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error);
            console.log("Error creating product")
        } else {
            console.log(data)
            res.json(data)
        }
    })
})

module.exports = router;