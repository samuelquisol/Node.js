const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    name: String,
    specialty: String,
    id: String
});

const Teacher = mongoose.model('teachers', teacherSchema);

module.exports = Teacher;