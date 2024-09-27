const {Router} = require('express');
const router = Router();
const {crearfoto,verfotos,buscarfoto,eliminarfoto,crearfotorestaurada} = require('../services/galeria');
const multer = require('multer');
const upload = multer({ dest: 'uploads' });
const {checkToken} = require('../utils/middleware');

router.post('/foto',upload.single('foto'),crearfoto);
router.post('/foto-restaurada',crearfotorestaurada);
router.get('/fotos',verfotos);
router.get('/foto/:titulo',buscarfoto);
router.delete('/foto/:id',eliminarfoto);





module.exports =  router;