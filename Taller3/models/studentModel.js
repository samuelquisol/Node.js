const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    id: String,
    name: String,
    birthday: Date,
    email: String,
    teacherId: String
});

const Student = mongoose.model('students', studentSchema);

module.exports = Student;