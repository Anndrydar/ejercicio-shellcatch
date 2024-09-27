const {Router} = require('express');
const router = Router();
const {crearfotopapelera,verfotosborradas,buscarfotoborrada,eliminardepapelera} = require('../services/papelera');


router.post('/papelera',crearfotopapelera);
router.get('/papeleras',verfotosborradas);
router.get('/papelera/:titulo',buscarfotoborrada);
router.delete('/papelera/:id',eliminardepapelera);





module.exports =  router;