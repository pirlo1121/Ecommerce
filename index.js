const express = require('express');
const conectionDB = require('./src/config/DB-conection');
const router = require('./src/routes/products.routes');
const app = express();
require('dotenv').config();

// json es express
app.use( express.json() )

const port = process.env.PORT || 3000
conectionDB()


//rutas
app.use('/api', router)





// puerto
app.listen(port, ()=>{
    console.log(`servidor conectado al puerto ${port}`)
})