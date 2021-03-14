const {Router} = require('express');
const router = Router();

const quejas =require('./data.json');

router.get('/', (req,res) => {
    console.log(quejas);
    res.json(quejas);
});

router.get('/id/:id', (req,res) => {
    const id = req.params.id;
    quejas.forEach(queja => {
        if(queja.id == id){
            console.log(queja);
            res.json(queja);
        }
    });
    res.status(500).json({error:'No encontrado'});
});

router.get('/servicio/:tipo', (req,res) => {
    const tipo = req.params.tipo;
    quejas.forEach(queja => {
        if(queja.tipo.toUpperCase() == tipo.toUpperCase()){
            console.log(queja);
            //res.json(queja);
        }
    });
    res.status(500).json({error:'No encontrado'});
});



router.get('/servicio/:tipo/ciudad/:ciudad', (req, res) => {
    const tipo = req.params.tipo;
    const ciudad = req.params.ciudad;
    quejas.forEach(queja => {
        if (queja.tipo.toUpperCase() == tipo.toUpperCase() && queja.ciudad.toUpperCase() == ciudad.toUpperCase()){ 
                //res.json(queja);
                console.log(queja);
                //return;
            }
            res.status(500).json({error:'No encontrado'});
        });
});

router.get('/servicio/:tipo/ciudad/:ciudad/colonia/:colonia', (req, res) =>{
    const tipo = req.params.tipo;
    const ciudad = req.params.ciudad;
    const colonia = req.params.colonia;
    quejas.forEach(queja => {
        if (queja.tipo.toUpperCase() == tipo.toUpperCase() && queja.ciudad.toUpperCase() == ciudad.toUpperCase() && queja.colonia.toUpperCase() == colonia.toUpperCase()){ 
                //res.json(queja);
                console.log(queja);
            };
            res.status(500).json({error:'No encontrado'});
        });
});

module.exports = router;

//npm run dev