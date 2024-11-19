const productsModel = require('../models/products.model')

// metodos de consulta

exports.getProducts = async (req, res)=>{
    try {
        const products = await productsModel.find();
        return res.status(200).json({ok: true, products})

    } catch (error) {
        console.log(error)
        console.log('hubo un error al obtener los productos')
    }
}

exports.getProductById = async (req,res)=>{
    try {
        const id = req.params.id
        res.send(`el producto es: ${id}`)
        // const product = await productsModel.findOne({_id: id})
        // if(!product) res.send('no se encontró el producto')
        // res.status(200).json({ok:true, product})
    } catch (error) {
        console.log(error)
        console.log('hubo un error')

        
    }
}