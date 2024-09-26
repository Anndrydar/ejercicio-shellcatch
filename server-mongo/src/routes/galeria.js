const {Router} = require('express');
const router = Router();
const {crearfoto,verfotos,buscarfoto,eliminarfoto} = require('../services/galeria');
const multer = require('multer');
const upload = multer({ dest: 'uploads' });

router.post('/foto',upload.single('foto'),crearfoto);
router.get('/fotos',verfotos);
router.get('/foto/:titulo',buscarfoto);
router.delete('/foto/:id',eliminarfoto);





module.exports =  router;