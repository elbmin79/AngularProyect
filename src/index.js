const express = require('express');
const app = express();
const morgan = require('morgan');

//Configuraciones
app.set('port', 3000)

//middlewares
app.use(morgan('dev'));
app.use(express.json())

//rutas
app.use(require('./routes/routes'))

//Empezando el servidor
app.listen(app.get('port'));
console.log("mi primer servidor");