const {Router} = require('express');
const router = Router();

router.get('/', (req,res) =>{
    res.json({"name":"JOhn Doe"});
});

module.exports = router;