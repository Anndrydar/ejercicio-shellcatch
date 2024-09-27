const jwt = require('jsonwebtoken');

const checkToken = (req,res,next) => {
    if(!req.headers['authorization']){
       return res.json({
        error: 'No existe token'
       })
    }

    const token = req.headers['authorization'];
    console.log('Token valido');
    try{
        const payload = jwt.verify(token,'galeria de fotos');
    }catch(error){
      return res.json({
        error: 'Token invalido'
       })
    }

    next();
}



module.exports = {
    checkToken
}


