const mongose = require('mongoose');
let Grade = mongose.model('grades', require('../models/gradeModel').schema);

const connectDB = async () => {
    try {
       /*  if (!Grade){
            Grade = mongoose.model('Grade', require('../models/gradeModel').schema);
        } */

        await mongose.connect('mongodb+srv://samuelquisol:Vskg4Hb9pOZGz6HC@learning-cluster.vazfyls.mongodb.net/')
        .then(()=> console.log('MongoDB connected'))
        .catch((error)=> console.log(error));
    
        /* await initializeData(); */

    } catch (error) {
        console.log('failed to connect to MongoDB', error);
        process.exit(1);
    }
};

const initializeData = async () => {
    try {
        await User.deleteMany(); 

        const usersData = [
            {
                name: 'Juan',
                email: 'juan@gmail.com',
                password: 'Londres',
            },
            {
                name: 'Adriana',
                email: 'maria@hotmail.com',
                password: 'París',
            },
        ];

        await User.insertMany(usersData);
        console.log('Data successfully initialized');
    } catch (error) {
        console.error('Data initialization error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;