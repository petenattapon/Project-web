const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname: { type: String},
    lastname: { type: String},
    email: { type: String},
    password: { type: String},
    status: {type:String, default:"user"},
    createdAt: { type: Date, default: Date.now() }
}, { collection: 'user-data' }
)

module.exports = mongoose.model("UserData", userSchema);
