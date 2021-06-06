//PROFE QUITAMOS LOS RES.JSON Y LOS RES.STATUS PQ CUANDO LOS USAMOS SE PRESENTA EL ERROR QUE LE MENCIONABA, POR ESO LOS DEJAMOS COMO CONSOLE.LOG DONDE SE DEMUESTRA LA LOGICA DE LAS RUTAS CORRECTAMENTE
const { Router } = require('express');
const router = Router();

//const producto =require('./data.json');

const productosCtrl = require('../controllers/products.controller')

router.get('/', productosCtrl.getProducts);

router.get('/:id', productosCtrl.getProduct);

router.delete('/:id', productosCtrl.deleteProduct);

router.put('/:id', productosCtrl.updateProduct);

router.post('/', productosCtrl.createProduct);

module.exports = router;

//npm run dev

