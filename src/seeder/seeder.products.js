const mongoose = require("mongoose");
const productsModel = require("../models/products.model");

const conectDB = async ()=>{

    try {
        await mongoose.connect('mongodb://localhost:27017')
        console.log('conectado a la base de datos')
        
    } catch (error) {
        console.log(error)
        console.log(process.env.DB_URI)
        console.log('no se pudo conectar con la base de datos')
    }
}

const seedProducts = async () => {
    conectDB();
    const products = [
        { name: 'Camiseta Básica', price: 250, description: 'Camiseta de algodón 100%, ideal para uso diario. Disponible en varios colores y tallas.', stock: 20 },
        { name: 'Leggings Deportivos', price: 350, description: 'Leggings de alta elasticidad y comodidad, perfectos para hacer ejercicio o uso casual. Con tecnología anti-humedad.', stock: 15 },
        { name: 'Zapatos Deportivos', price: 1200, description: 'Zapatos deportivos de última tecnología para mejorar tu rendimiento. Suela antideslizante y materiales transpirables.', stock: 10 },
        { name: 'Camisa de Algodón', price: 500, description: 'Camisa de manga larga en algodón suave, ideal para un look formal o casual. Disponible en varios colores.', stock: 12 },
        { name: 'Gorra Ajustable', price: 200, description: 'Gorra de algodón ajustable, perfecta para protegerte del sol mientras mantienes un estilo casual y moderno.', stock: 25 },
        { name: 'Camiseta Estampada', price: 300, description: 'Camiseta con diseños únicos y modernos. 100% algodón, suave y cómoda. Ideal para salir con amigos o disfrutar del fin de semana.', stock: 18 },
        { name: 'Leggings con Bolsillos', price: 400, description: 'Leggings con bolsillos laterales, cómodos y funcionales. Perfectos para practicar deportes o un día casual en casa.', stock: 8 },
        { name: 'Zapatos de Cuero', price: 1500, description: 'Zapatos de cuero de alta calidad, ideales para ocasiones formales o elegantes. Suela antideslizante y acabado refinado.', stock: 5 },
        { name: 'Camisa Casual', price: 550, description: 'Camisa de manga corta con un toque informal pero elegante, ideal para el trabajo o una salida de fin de semana.', stock: 14 },
        { name: 'Gorra de Béisbol', price: 180, description: 'Gorra clásica de béisbol, hecha de materiales resistentes y con ajuste trasero. Perfecta para los días soleados.', stock: 30 },
        { name: 'Camiseta Premium', price: 450, description: 'Camiseta premium, de tela suave y respirable. Corte moderno y cómodo. Ideal para cualquier ocasión casual.', stock: 22 },
        { name: 'Leggings de Compresión', price: 420, description: 'Leggings de compresión, diseñados para mejorar el rendimiento físico. Ofrecen soporte adicional durante el ejercicio intenso.', stock: 9 },
    ];

    try {
        await productsModel.insertMany(products);
        console.log('Productos insertados correctamente');
        process.exit();
    } catch (error) {
        console.error('Error insertando productos:', error.message);
        process.exit(1);
    }
};
seedProducts()