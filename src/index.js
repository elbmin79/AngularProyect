//Configuraciones const
const express = require('express');
const app = express();
const morgan = require('morgan');
const router = require('./routes/routes');

//Configuraciones port
app.set('port', 3000)
app.set('json spaces',2)


//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//rutas
app.use(require('./routes/routes'));

//Empezando el servidor
app.listen(app.get('port'));
console.log("Bandi-Quejas 1.13.4");