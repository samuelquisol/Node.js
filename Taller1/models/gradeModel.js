const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
    Subject: String,
    id_Student: String,
    Description: String,
    grade: Number
});

const Grade = mongoose.model('grades', gradeSchema);

module.exports = Grade;