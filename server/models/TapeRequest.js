const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productSchema = new Schema({
    name:{type: String, required: true},
    details : {type: String, required: true},
    sideA : {type: String, required: true},
    sideB : {type: String, required: true},
    Options: {type: String, required: true}
})

module.exports = mongoose.model('Tape', productSchema)