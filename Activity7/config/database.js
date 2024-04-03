const mongoose = require('mongoose');
let User

const connectDatabase = async () => {
    try {
        if (!User) {
            User = mongoose.model('User', require('../models/userModel').schema);
        }

        await mongoose.connect('mongodb+srv://samuelquisol:123@db-ejemplo.foxkseq.mongodb.net/')
        .then(() => console.log('MongoDB connected'))
        .catch((err) => console.log(err));

        await initializeData();

    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1);
    }
};

const initializeData = async () => {
    try {
        await User.deleteMany(); 

        const usersData = [
            
            {
                id: 1,
                nombres: "Mckayla Vandervort",
                apellidos: "Mills",
                correo: "fgleichner@example.org",
                ciudad: "Herbertton",
                pais: "Bangladesh",
                salario: 5766159,
                empresa_id: 4,
                created_at: "2024-03-06 13:05:12",
                updated_at: "2024-03-06 13:05:12"
            },
            {
                id: 2,
                nombres: "Prof. Ashtyn Christiansen Jr.",
                apellidos: "Streich",
                correo: "bryana30@example.org",
                ciudad: "Nicholeborough",
                pais: "Azerbaijan",
                salario: 1020735,
                empresa_id: 28,
                created_at: "2024-03-06 13:05:12",
                updated_at: "2024-03-06 13:05:12"
            }
        ];

        await User.insertMany(usersData);
        console.log('Data successfully initialized');
    } catch (error) {
        console.error('Data initialization error:', error);
        process.exit(1);
    }
};

module.exports = connectDatabase;