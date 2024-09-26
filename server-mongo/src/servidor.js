const  express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
require('dotenv').config();
const ruta1 = require('./routes/galeria');
const ruta2 = require('./routes/usuario');

const app = express();
const PORT = process.env.PORT;

//middleware
app.use(express.json());
app.use(cors());
app.use('/app', ruta1);
app.use('/app', ruta2);



//Conexion a la BD de mongodb en railway.app
mongoose.connect(process.env.URL, {})
    .then(() => console.log('Conectado a mongoDB'))
    .catch((error) => console.error('Error de conexión:', error));
  

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));