const Grade = require('../models/gradeModel');

const gradeController = {
    getAllGrades: async (res) => {
        try {
            const grades = await Grade.find();
            res.json(grades);
        } catch (error) {
            console.error('Error al listar notas')
            res.status(500).json({ message: 'Internal Server Error' })
        }
    },

    getGradeById: async (req, res) => {
        try {
            const {id} = req.params;
            const gradeById = await Grade.findById(id);
            res.json(gradeById);
        } catch (error) {
            console.error('Error al listar notas')
            res.status(500).json({ message: 'Internal Server Error' })
        }
    }
};

module.exports = gradeController;