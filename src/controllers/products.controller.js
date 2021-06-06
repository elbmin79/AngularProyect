const productosCtrl = {}

const productos = require('../models/productos.js')
//const productos =require('../routes/data.json');

productosCtrl.getProducts = async (req, res) => {
    const productosF = await productos.find();
    res.json(productosF)
}

productosCtrl.createProduct = async (req, res) => {
    const newProduct = new productos(req.body);
    await newProduct.save();
    res.send({msg: 'Producto Creado!'})
}

productosCtrl.getProduct = async (req, res) => {
    const productoF = await productos.findById(req.params.id);
    res.send(productoF)
    console.log(productoF)
}

productosCtrl.deleteProduct = async (req, res) => {
    const productoF = await productos.findByIdAndDelete(req.params.id);
    res.send({msg: 'Producto eliminado:', productoF})
}

productosCtrl.updateProduct = async (req, res) => {
    const productoF = await productos.findByIdAndUpdate(req.params.id, req.body);
    res.send({msg: 'Producto modificado:', productoF})
}

module.exports = productosCtrl;