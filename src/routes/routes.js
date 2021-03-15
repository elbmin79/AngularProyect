//PROFE QUITAMOS LOS RES.JSON Y LOS RES.STATUS PQ CUANDO LOS USAMOS SE PRESENTA EL ERROR QUE LE MENCIONABA, POR ESO LOS DEJAMOS COMO CONSOLE.LOG DONDE SE DEMUESTRA LA LOGICA DE LAS RUTAS CORRECTAMENTE
const { Router } = require('express');
const router = Router();

const quejas =require('./data.json');

router.get('/', (req,res) => { //MUESTRA TODAS LAS QUEJAS (TODO LO DEL ARCHIVO DATA.JSON)
    res.json(quejas);
});

router.get('/id/:id', (req,res) => { //MUESTRA LA QUEJA CON EL ID QUE INGRESES
    const id = req.params.id;
    quejas.forEach(queja => {
        if(queja.id == id){
            //res.json(queja);
            console.log(queja);
        }
    });
    //res.status(500).json({error:'No encontrado'});
});

router.get('/servicio/:tipo', (req,res) => { //MUESTRA TODAS LAS QUEJAS DE DICHO SERVICIO
    const tipo = req.params.tipo;
    quejas.forEach(queja => {
        if(queja.tipo.toUpperCase() == tipo.toUpperCase()){
            //res.json(queja);
            console.log(queja);
        }
    });
    //res.status(500).json({error:'No encontrado'});
});

router.get('/servicio/:tipo/ciudad/:ciudad', (req, res) => { //MUESTRA LAS QUEJAS DE LA CIUDAD Y SERVICIO INGRESADO
    const tipo = req.params.tipo;
    const ciudad = req.params.ciudad;
    quejas.forEach(queja => {
        if (queja.tipo.toUpperCase() == tipo.toUpperCase() && queja.ciudad.toUpperCase() == ciudad.toUpperCase()){ 
                //res.json(queja);
                console.log(queja);
            }
        });
        //res.status(500).json({error:'No encontrado'});
});

router.get('/servicio/:tipo/ciudad/:ciudad/colonia/:colonia', (req, res) =>{ //MUESTRA LAS QUEJAS EN LA COLONIA DE LA CIUDAD DEL SERVICIO INGRESADO
    const tipo = req.params.tipo;
    const ciudad = req.params.ciudad;
    const colonia = req.params.colonia;
    quejas.forEach(queja => {
        if (queja.tipo.toUpperCase() == tipo.toUpperCase() && queja.ciudad.toUpperCase() == ciudad.toUpperCase() && queja.colonia.toUpperCase() == colonia.toUpperCase()){ 
                //res.json(queja);
                console.log(queja);
            }
            //res.status(500).json({error:'No encontrado'});
        });
});

router.get('/reporte/ciudad/:ciudad' , (req, res) =>{ //REPORTE QUE MUESTRA LA CANTIDAD DE QUEJAS EN LA CIUDAD Y MUESTRA UN RESUMEN DE ESTAS
    const ciudad = req.params.ciudad;
    let c = 0;
    quejas.forEach(queja => {
        if(queja.ciudad.toUpperCase() == ciudad.toUpperCase()){
            console.log("Queja con id {"+queja.id+"} en la fecha "+ queja.fecha + " de tipo: "+queja.tipo);
            c++;
        }
    });
    console.log("Cantidad de quejas en " + ciudad.toUpperCase() + ": " + c);
});

router.get('/reporte/ciudad/:ciudad/colonia' , (req, res) =>{ //REPORTE QUE DEVUELVE LA COLONIA CON MAS QUEJAS DE DICHA CIUDAD
    const ciudad = req.params.ciudad;
    var c = [];
    let n=0;
    let cont = 0;
    quejas.forEach(queja => {
        if(queja.ciudad.toUpperCase() == ciudad.toUpperCase()){
            c[n]=queja.colonia;
            n++;
        }
    });
    console.log("La colonia con mas quejas en esta ciudad es: "+mostFrequent(c));
    quejas.forEach(queja => {
        if(queja.ciudad.toUpperCase() == ciudad.toUpperCase() && queja.colonia.toUpperCase() == mostFrequent(c).toUpperCase()){
            cont++;
            console.log(queja);
        }
    });
    console.log("Con un total de "+cont+" quejas");
});

router.get('/reporte/ciudad/:ciudad/servicio' , (req, res) =>{ //REPORTE QUE DEVUELVE SERVICIOS CON MAS QUEJAS DE DICHA CIUDAD
    const ciudad = req.params.ciudad;
    var c = [];
    let n=0;
    let cont = 0;
    quejas.forEach(queja => {
        if(queja.ciudad.toUpperCase() == ciudad.toUpperCase()){
            c[n]=queja.tipo;
            n++;
        }
    });
    console.log("El servicio con mas quejas en esta ciudad es: "+mostFrequent(c));
    quejas.forEach(queja => {
        if(queja.ciudad.toUpperCase() == ciudad.toUpperCase() && queja.tipo.toUpperCase() == mostFrequent(c).toUpperCase()){
            cont++
            console.log(queja);
        }
    });
    console.log("Con un total de "+cont+" quejas");
});


router.get('/reporte/mes/:mes/servicio/:servicio' , (req, res) =>{ //REPORTE QUE DEVUELVE LAS QUEJAS DE DICHO SERVICIO EN EL MES INDICADO
    const mes = req.params.mes;
    const servicio = req.params.servicio;
    let mes2 = "";
    switch(true){
        case mes == "01":
            mes2="enero";
            break;
        case mes =="02":
            mes2="febrero";
            break;
        case mes =="03":
            mes2="marzo";
            break;
        case mes=="04":
            mes2="abril";
            break;
        case mes=="05":
            mes2="mayo";
            break;   
        case mes == "06":
            mes2="junio";
            break;
        case mes == "07":
            mes2="julio";
            break;     
        case mes == "08":
            mes2="agosto";
            break;
        case mes == "09":
            mes2="septiembre";
            break;   
        case mes == "10":
            mes2="octubre";
            break;
        case mes == "11":
            mes2="noviembre";
            break;     
        case mes == "12":
            mes2="diciembre";
            break;
        default:
            console.log("Error. Mes no existe.")
            break;     
    }
    quejas.forEach(queja => {
        if((queja.tipo.toUpperCase() == servicio.toUpperCase()) && (mes.charAt(0)==queja.fecha.charAt(3)) && (mes.charAt(1)==queja.fecha.charAt(4))){
            console.log("Queja con id {"+queja.id+"} en el mes de "+ mes2 + " de tipo: "+queja.tipo);
        }
    });
});

router.get('/reporte/mes/:mes/ciudad/:ciudad/colonia/:colonia' , (req, res) =>{ //REPORTE QUE DEVUELVE LAS QUEJAS DE DICHA COLONIA Y CIUDAD EN EL MES INDICADO
    const mes = req.params.mes;
    const ciudad = req.params.ciudad;
    const colonia = req.params.colonia;
    let mes2 = "";
    switch(true){
        case mes == "01":
            mes2="enero";
            break;
        case mes =="02":
            mes2="febrero";
            break;
        case mes =="03":
            mes2="marzo";
            break;
        case mes=="04":
            mes2="abril";
            break;
        case mes=="05":
            mes2="mayo";
            break;   
        case mes == "06":
            mes2="junio";
            break;
        case mes == "07":
            mes2="julio";
            break;     
        case mes == "08":
            mes2="agosto";
            break;
        case mes == "09":
            mes2="septiembre";
            break;   
        case mes == "10":
            mes2="octubre";
            break;
        case mes == "11":
            mes2="noviembre";
            break;     
        case mes == "12":
            mes2="diciembre";
            break;
        default:
            console.log("Error. Mes no existe.")
            break;     
    }
    quejas.forEach(queja => {
        if((queja.ciudad.toUpperCase() == ciudad.toUpperCase()) && (queja.colonia.toUpperCase() == colonia.toUpperCase()) && (mes.charAt(0)==queja.fecha.charAt(3)) && (mes.charAt(1)==queja.fecha.charAt(4))){
            console.log("Queja con id {"+queja.id+"} en el mes de "+ mes2 + " de la ciudad: "+queja.ciudad+" de la colonia: "+queja.colonia);
        }
    });
});

function mostFrequent(array) {
    var map = array.map(function(a) {
        return array.filter(function(b) {
            return a === b;
        }).length;
    });
    return array[map.indexOf(Math.max.apply(null, map))];
}

module.exports = router;

//npm run dev