const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    birthday: Date,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;