const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: Number,
    nombres: String,
    apellidos: String,
    correo: String,
    ciudad: String,
    pais: String,
    salario: Number,
    empresa_id: Number,
    created_at: String,
    updated_at: String
});

const User = mongoose.model('usuariosempresas', userSchema);

module.exports = User;