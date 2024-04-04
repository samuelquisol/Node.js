const mongoose = require('mongoose');
let Student = mongoose.model('students', require('../models/studentModel').schema);
let Teacher = mongoose.model('teachers', require('../models/teacherModel').schema);

const connectedDB = async () => {
    try {
        if(!Student || !Teacher){
            Student = mongoose.model('students', require('../models/studentModel').schema);
            Teacher = mongoose.model('teachers', require('../models/teacherModel').schema);
        };

        await mongoose.connect('linkMongoDB')
        .then(() => {console.log('MongoDB Connected')})
        .catch((error)=> console.log(error));

        await initializeData();

    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        process.exit(1);
    }
};

const initializeData = async () => {
    try {
        await Teacher.deleteMany();
        await Student.deleteMany();

        const teacherData = [
            {
                id: '1',
                name: 'Sam',
                specialty: '2005-03-31',
                teacherId: 'Alberto3',
            }
        ];

        const studentData = [
            {
                name: 'Sam',
                birthday: '2005-03-31',
                email: 'sqs@gmail.com',
                teacherId: 'Alberto3'
            }
        ];

        await Teacher.insertMany(teacherData);
        await Student.insertMany(studentData);
        
        console.log('Data sucessfully initialized');

    } catch (error) {
        console.error('Data initialization error:', error);
        process.exit(1);
    }
}

module.exports = connectedDB;