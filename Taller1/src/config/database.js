const mongose = require('mongoose');
let Grade = mongose.model('grades', require('../models/gradeModel').schema);

const connectDB = async () => {
    try {
       /*  if (!Grade){
            Grade = mongoose.model('Grade', require('../models/gradeModel').schema);
        } */

        await mongose.connect(process.env.DB_TALLER1_URI)
        .then(()=> console.log('MongoDB connected'))
        .catch((error)=> console.log(error));
    
/*         await initializeData();
 */
    } catch (error) {
        console.log('failed to connect to MongoDB', error);
        process.exit(1);
    }
};

const initializeData = async () => {
    try {
        await Grade.deleteMany(); 

        const usersData = [
            {
                Subject: 'English',
                id_Student: '1',
                Description: 'Actividad 1',
                grade: 5
            },
            {
                Subject: 'Literature',
                id_Student: '1',
                Description: 'examen 1',
                grade: 5
            }
        ];

        await Grade.insertMany(usersData);
        console.log('Data successfully initialized');
    } catch (error) {
        console.error('Data initialization error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;