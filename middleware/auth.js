// Pasos
/* 1. Importar herramienta de manejo de acceso */
/* 2. Definir una estrategia de extrancción jwt que requiere el passport-jwt */
/* 3. Importar esquema */
/* 4. Definir token */
/* 5. Construir estrategia con el token gestionando errores */
/* 6. Usar estrategia para el pasaporte */
/* 7. Inicializar pasaporte */
/* 8. Autenticar pasaporte */
/* 9. exportar funcionalidades */
//---------------------------------------------------------------

/* 1. Importar herramienta de manejo de acceso */
const passport = require("passport");

/* 2. Definir una estrategia de extrancción jwt que requiere el passport-jwt */
const { Strategy, ExtractJwt } = require("passport-jwt")

/* 3. Importar esquema */
const Student = require("../simulacro/SimulacroVanRossum.js_SamuelQuinteroSolís/src/models/studentModel")

/* 4. Definir token */
const jwt_secret = "##contraseña##";

/* 5. Construir estrategia con el token gestionando errores */
const strategy = new Strategy( 
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: jwt_secret
    },
    async (jwtPayload, done) => {
        try {
            const user = await Student.findById({userid: jwtPayload.id})
            if(!user) {
                const error = new Error("User not found")
                console.log(error)
            }
            done(null, user) 

        } catch (error) {
            done(error)
        }
    }
);

/* 6. Usar estrategia para el pasaporte */
passport.use(strategy);

/* 7. Inicializar pasaporte */
const initialize = () => {
    return passport.initialize();
};

/* 8. Autenticar pasaporte */
const authenticate = () => {
    return passport.authenticate("jwt", {session:false})
};

/* 9. exportar funcionalidades */
module.exports = {
    initialize,
    authenticate,
};