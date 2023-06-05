const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: { type: String},
    email: { type: String},
    password: { type: String},
    
}, { collection: 'user-data' }
)

module.exports = mongoose.model("UserData", userSchema);
