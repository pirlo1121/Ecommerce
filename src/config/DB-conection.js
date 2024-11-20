const mongoose = require('mongoose')
require('dotenv').config()
const link = process.env.DB_URI


const conectionDB = async ()=>{

    try {
        await mongoose.connect(link)
        console.log('conectado a la base de datos')
        
    } catch (error) {
        console.log(error)
        console.log('no se pudo conectar con la base de datos')
    }
}


module.exports = conectionDB
