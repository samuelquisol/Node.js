// Pasos
/* 1. Importar herramienta de manejo de apis */
/* 2. Importar convertidor de información llamado body-parser */
/* 3. Importar conexión con la DB */
/* 4. Importar enrutador */
/* 5. Definir variable de ejecución de express llamada app
para manejar funcionalidades deexpress */
/* 6. Definir puerto de localHost */
/* 7. Importar ditema de Autentificación */
/* 8. Importar conexión a la DB */
/* 9. Analizar las solicitudes entrantes con el tipo de 
contenido application/json. y application/x-www-form-urlencoded. */
/* 10. Inicializa la autentificación */
/* 11. Configura las rutas */
/* 12. Escucha al localHost */

//---------------------------------------------------------------
/* 1. Importar herramienta de manejo de apis */
const express = require('express');

/* 2. Importar convertidor de información llamado body-parser */
const bodyParser = require('body-parser')

/* 3. Importar conexión con la DB */
const connectDB = require('./config/DB');

/* 4. Importar enrutador */
const routes = require('./Routes/routes');

/* 5. Definir variable de ejecución de express llamada app
para usar funcionalidades de express */
const app = express();

/* 6. Definir puerto de localHost */
const port = 3000;

/* 7. Importar sistema de Autentificación */
const auth = require("./middleware/auth")

/* 8. Importar conexión a la DB */
connectDB();

/* 9. Analizar las solicitudes entrantes con el tipo de 
contenido application/json. y application/x-www-form-urlencoded. */
app.use(bodyParser.json())

// Cuando extended está establecido en false, bodyParser utiliza la función querystring de Node.js para analizar los cuerpos de las solicitudes entrantes. 
// Cuando extended está establecido en true, utiliza la biblioteca qs para analizar los cuerpos de las solicitudes entrantes, lo que permite analizar objetos anidados y matrices. 
app.use(bodyParser.urlencoded({ extended: false }))

/* 10. Inicializa la autentificación */
app.use(auth.initialize())

/* 11. Configura las rutas */
app.use('/', routes);

/* 12. Escucha al localHost */
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));