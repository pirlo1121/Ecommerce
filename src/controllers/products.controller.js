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

exports.addProduct = async (req, res) => {
    try { 
        let product = req.body
        let productname = req.body.name
        let productprice = req.body.price
        const productoExistente = await productsModel.findOne({ name: productname, price: productprice });
        if (productoExistente) {
            productoExistente.stock += 1;
            await productoExistente.save();
            return res.status(200).json({ message:'Producto ya esta en la lista, stock incrementado.'})
        } else {
            let newProduct = new productsModel(product)
            await newProduct.save()
            res.status(201).json(newProduct)   
        }   
    } catch (error) {
        console.log(error)
        console.log('hubo un error') 
    }
}
exports.borrarProducto = async (req, res) => {
    try { 
        let findProduct = req.params.id
        if (findProduct.length === 24) {
            let product = await productsModel.findById(findProduct)
            if (!product) res.status(400).send({ error: "No se encuentra ningun producto"})
            let deleteProduct = await productsModel.findOneAndDelete({ _id: findProduct})
            res.status(200).json(deleteProduct); 
        } else {
            res.send("Id invalida")
        }
    } catch (error) {
        console.log(error)
        console.log({error: "Ha ocurrido un error comunicate con el admi"})
    }         
}