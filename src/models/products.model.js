const mongoose = require('mongoose'); // Schema y Model


const productsModel = mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: String,
    stock: {
        type: Number,
        required: true
    }, 
    
}, {
    versionkey: false
})

/*
{
    "name": "computador",
    "price": 300000, 
    "description": computador marca hp tactil,
    "stock": 3
}
*/


// verificar que en mongoose se cree con una sola "s";
module.exports = mongoose.model('products', productsModel)