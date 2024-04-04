const mongoose = require('mongoose');
let User

const connectedDB = async () => {
    try {
        if(!User){
            User = mongoose.model('User', require('../models/userModel').schema);
        }

        await mongoose.connect('mongodb+srv://samuelquisol:Vskg4Hb9pOZGz6HC@learning-cluster.vazfyls.mongodb.net/')
        .then(() => console.log('MongoDB Connected'))
        .catch(error => console.log(error));

/*         await initializeData();
 */
    } catch (error) {
        console.log('Failed to connect to MongoDB');
        process.exit(1);        
    }
};

const initializeData = async () => {
    try {
        await User.deleteMany();

        const userData = [
            {
                name: "Sam",
                lastName: "Quisol",
                birthday: "1998-05-12",
                email: "sqs@gmail.com",
                password: "123"
            },
            {
                name: "Max",
                lastName: "Wheaters",
                birthday: "2002-10-2",
                email: "mw@gmail.com",
                password: "321"
            }
        ];

        await User.insertMany(userData);
        console.log('Data Successfully Initialized');

    } catch (error) {
        console.log('Data Initialization error:', error);
        process.exit(1);;
    }
}

module.exports = connectedDB;