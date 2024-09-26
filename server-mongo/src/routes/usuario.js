const {Router} = require('express');
const router = Router();
const {crearuser,login} = require('../services/usuario');



router.post('/cuenta',crearuser);
router.post('/login',login);



module.exports =  router;