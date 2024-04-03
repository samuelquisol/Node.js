// Importar los módulos necesarios
const express = require('express');
const mongoose = require('mongoose');

// Conectar a la base de datos MongoDB
mongoose.connect('mongodb+srv://samuelquisol:123@db-ejemplo.foxkseq.mongodb.net/', { 
    useNewUrlParser: true,
    useUnifiedTopology: true, 
});

// Obtener la conexión a la base de datos
const db = mongoose.connection;

// Manejar errores de conexión a la base de datos
db.on('error', console.error.bind(console, 'connection error in DB'));

// Una vez que la conexión se establece correctamente
db.once('open', function(){
    console.log('Connected to MongoDB');
    
    // Definir el esquema para los usuarios
    const coderSchema = new mongoose.Schema({
        nombres: String,
        apellidos: String,
        ciudad: String,
        pais: String,
        salario: Number,
        edad: Number,
        altura: Number,
        peso: Number,
        genero: String
    });

    // Crear modelos basados en el esquema para usuarios y empresas
    const coder = mongoose.model('programadores', coderSchema);

    // Configurar la aplicación Express
    const app = express();
    app.use(express.json());

    /* Definir la ruta para obtener cada elemento 
    del Array de objetos */

    app.get('/api/programadores', async (req, res)=>{
        try {
            let programadores = await coder.find();
            res.json(programadores);
        } catch (error) {
            console.error('Error en la consulta a la base de datos:', error);
            res.status(500).json({error: 'Error en la consulta a la base de datos'});
        }
    });

    /* 1. Obtener todos los usuarios que sean mayores de 18 años. */
    app.get('/api/usuarios/edadmayor18', async (req, res)=>{
        try {
            let programadores = await coder.find( {edad: {$gt: 18}} );
            res.json(programadores);
        } catch (error) {
            console.error('Error en la consulta a la base de datos:', error);
            res.status(500).json({error: 'Error en la consulta a la base de datos'});
        }
    });

    /* 2. Obtener todos los usuarios que sean de Londres o de París. */
    app.get('/api/usuarios/ciudadLondresoParís', async (req, res)=>{
        try {
            let programadores = await coder.find({ ciudad: { $in: ['Londres', 'París'] }});
            res.json(programadores);
        } catch (error) {
            console.error('Error en la consulta a la base de datos:', error);
            res.status(500).json({error: 'Error en la consulta a la base de datos'});
        }
    });

    /* 3. Obtener a todos los usuarios que ganen más de $2000 al mes y tengan menos de 30 años. */
    app.get('/api/usuarios/salariomayor2000/edadmenor30', async (req, res)=>{
        try {
            let programadores = await coder.find( {salario: { $gt: 2000 }, edad: { $lt: 30 }});
            res.json(programadores);
        } catch (error) {
            console.error('Error en la consulta a la base de datos:', error);
            res.status(500).json({error: 'Error en la consulta a la base de datos'});
        }
    });

    /* 4. Obtener a todos los usuarios que sean de España y ganen más de $3000 al mes. */
    app.get('/api/usuarios/pais:España/salariomayor3000', async (req, res)=>{
        try {
            let programadores = await coder.find( {pais: 'España', salario: { $gt: 3000 }});
            res.json(programadores);
        } catch (error) {
            console.error('Error en la consulta a la base de datos:', error);
            res.status(500).json({error: 'Error en la consulta a la base de datos'});
        }
    });

    /* 5. Obtener todos los usuarios que tengan entre 25 y 35 años. */
    app.get('/api/usuarios/edadmayorigual25menorigual35', async (req, res)=>{
        try {
            let programadores = await coder.find( {edad: { $gte: 25, $lte: 35}});
            res.json(programadores);
        } catch (error) {
            console.error('Error en la consulta a la base de datos:', error);
            res.status(500).json({error: 'Error en la consulta a la base de datos'});
        }
    });

    /* 6. Obtener a todos los usuarios que no sean de Estados Unidos. */
    app.get('/api/usuarios/ciudad_no_es_EstadosUnidos', async (req, res)=>{
        try {
            let programadores = await coder.find( {pais: { $ne: 'Estados Unidos' }});
            res.json(programadores);
        } catch (error) {
            console.error('Error en la consulta a la base de datos:', error);
            res.status(500).json({error: 'Error en la consulta a la base de datos'});
        }
    });

    /* 7. Obtener a todos los usuarios que sean de Londres y que ganen más de $2500 o que tengan más de 30 años. */
    app.get('/api/usuarios/ciudadLondres/salariomayor2500oedadmayor30', async (req, res)=>{
        try {
            let programadores = await coder.find( { ciudad: 'Londres', $or: [ {salario: {$gt: 2500}}, { edad: {$gt: 30}} ]});
            res.json(programadores);
        } catch (error) {
            console.error('Error en la consulta a la base de datos:', error);
            res.status(500).json({error: 'Error en la consulta a la base de datos'});
        }
    });

    /* 8. Obtener a todos los usuarios que sean de Australia y tengan un peso mayor a 140 libras. */
    app.get('/api/usuarios/pais/:Australia/peso/:140', async (req, res)=>{        try {
            let programadores = await coder.find( {pais: 'Australia', peso: {$gt: 140}});
            res.json(programadores);
        } catch (error) {
            console.error('Error en la consulta a la base de datos:', error);
            res.status(500).json({error: 'Error en la consulta a la base de datos'});
        }
    });

    /* 9. Obtener a todos los usuarios que no sean de Londres ni de París. */
    app.get('/api/usuarios/ciudad/:ciudad', async (req, res) => {
        try {
            let programadores = await coder.find({ ciudad: { $nin: ['Londres', 'París'] } });
            res.json(programadores);
        } catch (error) {
            console.error('Error en la consulta a la base de datos:', error);
            res.status(500).json({ error: 'Error en la consulta a la base de datos' });
        }
    });
    
    /* 10. Obtener a todos los usuarios que ganen menos de $2000 al mes o que tengan más de 40 años. */
    app.get('/api/usuarios/salario_menor_2000_o_edad_mayor_40', async (req, res)=>{        
        try {
            let programadores = await coder.find( { $or: [ { salario: {$lt: 2000 }}, {edad: {$gt: 40} } ] } );
            res.json(programadores);
        } catch (error) {
            console.error('Error en la consulta a la base de datos:', error);
            res.status(500).json({error: 'Error en la consulta a la base de datos'});
        }
    });

    /* 11. Obtener a todos los usuarios que sean de Canadá y ganen más de $4000 al mes o que tengan una altura mayor a 180 cm. */
    app.get('/api/usuarios/pais:Canadá/salario_mayor_4000_o_altura_mayor_180', async (req, res)=>{
        try {
            let programadores = await coder.find( { pais: 'Canadá' , $or: [{salario: {$gt: 4000}}, { altura: {$gt: 180} } ] } );
            res.json(programadores);
        } catch (error) {
            console.error('Error en la consulta a la base de datos:', error);
            res.status(500).json({error: 'Error en la consulta a la base de datos'});
        }
    });

    /* 12. Obtener todos los usuarios que sean de Italia y tengan entre 20 y 30 años. */
    app.get('/api/usuarios/pais:Italia/edad:20&&30', async (req,res)=>{
        try {
            let programadores = await coder.find( { pais: 'Italia', edad: { $gte: 20, $lte: 30 } } );
            res.json(programadores);
        } catch (error) {
            console.error('Error en la consulta a la base de datos:', error);
            res.status(500).json({error: 'Error en la consulta a la base de datos'});
        }
    });

    /* 13. Obtener todos los usuarios que no tengan un correo electrónico registrado. */
    app.get('/api/usuarios/!correo', async (req, res)=>{
        try {
            let programadores = await coder.find({correo: {$exists: false}});
            res.json(programadores);
        } catch (error) {
            console.error('Error en la consulta a la base de datos:', error);
            res.status(500).json({error: 'Error en la consulta a la base de datos'});
        }
    });

    /* 14. Obtener todos los usuarios que sean de Francia y que su salario esté entre $3000 y $5000 al mes. */
    app.get('/api/usuarios/pais:Francia/salario:3000a5000', async (req, res)=>{
        try {
            let programadores = await coder.find({ pais: 'Francia', salario: {$gte: 3000, $lte: 5000} });
            res.json(programadores);
        } catch (error) {
            console.error('Error en la consulta a la base de datos:', error);
            res.status(500).json({error: 'Error en la consulta a la base de datos'});
        }
    });

    /* 15. Obtener todos los usuarios que sean de Brasil y que tengan un peso menor a 120 libras o más de 140 libras. */
    app.get('/api/usuarios/pais:Brasil/pesomenor120omayor140', async (req, res)=>{
        try {
            let programadores = await coder.find({pais: 'Brasil', $or: [{ peso: { $lt: 120 } }, { peso: { $gt: 140 } }]});
            res.json(programadores);
        } catch (error) {
            console.error('Error en la consulta a la base de datos:', error);
            res.status(500).json({error: 'Error en la consulta a la base de datos'});
        }
    });

    /* 16. Obtener todos los usuarios que sean de Argentina o de Chile y que tengan una edad menor a 25 años. */
    app.get('/api/usuarios/pais:ArgentinaoChile/edadmenor25', async (req, res)=>{
        try {
            let programadores = await coder.find({pais: {$in: ['Argentina', 'Chile']}, edad: {$lt: 25}});
            res.json(programadores);
        } catch (error) {
            console.error('Error en la consulta a la base de datos:', error);
            res.status(500).json({error: 'Error en la consulta a la base de datos'});
        }
    });

    /* 17. Obtener a todos los usuarios que no sean de España ni de México y que ganen menos de $3000 al mes. */
    app.get('/api/usuarios/pais!España!México/salariomenos3000', async (req, res)=>{
        try {
            let programadores = await coder.find({pais: {$nin: ['España', 'México']}, salario: {$lt: 3000}});
            res.json(programadores);
        } catch (error) {
            console.error('Error en la consulta a la base de datos:', error);
            res.status(500).json({error: 'Error en la consulta a la base de datos'});
        }
    });

    /* 18. Obtener todos los usuarios que sean de Alemania y que tengan un salario menor a $4000 o una edad mayor a 35 años. */
    app.get('/api/usuarios/pais:Alemania/salariomenor4000/edadmayor35', async (req, res)=>{
        try {
            let programadores = await coder.find({pais: 'Alemania', $or: [{salario: {$lt: 4000}}, {edad: {$gt: 35}}]});
            res.json(programadores);
        } catch (error) {
            console.error('Error en la consulta a la base de datos:', error);
            res.status(500).json({error: 'Error en la consulta a la base de datos'});
        }
    });

    /* 19. Obtener todos los usuarios que no sean de Colombia y que su altura sea menor a 170 cm. */
        app.get('/api/usuarios/pais!Colombia/alturamayor170', async (req, res)=>{
        try {
            let programadores = await coder.find({pais: {$ne: 'Colombia'}, altura: {$lt: 170}});
            res.json(programadores);
        } catch (error) {
            console.error('Error en la consulta a la base de datos:', error);
            res.status(500).json({error: 'Error en la consulta a la base de datos'});
        }
    });

    /* 20. Obtener todos los usuarios que sean de India y que no tengan un salario registrado. */
        app.get('/api/usuarios/pais:India/!salario', async (req, res)=>{
        try {
            let programadores = await coder.find({pais: 'India', salario: null});
            res.json(programadores);
        } catch (error) {
            console.error('Error en la consulta a la base de datos:', error);
            res.status(500).json({error: 'Error en la consulta a la base de datos'});
        }
    });

    // Iniciar el servidor y escuchar en el puerto 3000
    app.listen(3000, ()=>{
        console.log('Server listening on port 3000');
    });
});