const mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
    username: String,
    firstName: String,
    lastName: String,
    password: String,
    name: String,
    dob: Date,
    gender: String,
    email: String,
    photo: String,
    createdAt: Date,
    updatedAt: Date,
})

const User = mongoose.model('User', UserSchema);

module.exports = User;