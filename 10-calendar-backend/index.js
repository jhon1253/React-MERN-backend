const express = require('express');
const {dbConection, dbConnection} = require('./database/config')
const cors = require('cors');
require("dotenv").config();


//crear el servidor de express

const app = express();

//base de datos

dbConnection();

//cors
app.use(cors())


//Directorio publico

app.use( express.static('public') );

app.use( express.json() )

//Rutas
app.use('/api/auth', require('./routes/auth'))
app.use('/api/events', require('./routes/events'))

//lestura y parceo del body:


// {
//     "name": "10-calendar-backend",
//     "version": "1.0.0",
//     "main": "index.js",
//     "scripts": {
//       "dev": "nodemon index.js",
//       "start": "node index.js"
//     },
//     "keywords": [],
//     "author": "",
//     "license": "ISC",
//     "description": "",
//     "dependencies": {
//       "bcryptjs": "^2.4.3",
//       "cors": "^2.8.5",
//       "dotenv": "^8.6.0",
//       "express": "^4.17.1",
//       "express-validator": "^6.5.0",
//       "jsonwebtoken": "^8.5.1",
//       "moment": "^2.26.0",
//       "mongoose": "^5.9.18"
//     }
//   }
  




//escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en el puerto http://localhost:${ process.env.PORT }`)
})