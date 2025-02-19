const express = require('express');
const {dbConection} = require('./database/config')
const cors = require('cors');
require("dotenv").config();


//crear el servidor de express

const app = express();

//base de datos

dbConection();

//cors
app.use(cors())


//Directorio publico

app.use( express.static('public') );

app.use( express.json() )

//Rutas
app.use('/api/auth', require('./routes/auth'))
app.use('/api/events', require('./routes/events'))

//lestura y parceo del body:







//escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en el puerto http://localhost:${ process.env.PORT }`)
})