//Configuraciones const
require('./database');
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

//Configuraciones port
app.set('port', 3000)
app.set('json spaces',2)


//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//rutas
app.use('/api/productos',require('./routes/routes'));

//Empezando el servidor
app.listen(app.get('port'));
console.log("Bandi-Quejas 1.13.4");