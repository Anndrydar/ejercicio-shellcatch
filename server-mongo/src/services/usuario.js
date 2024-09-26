const userSchema = require('../models/usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



const crearuser = async(req,res) => {
    try{
        req.body.password = bcrypt.hashSync(req.body.password, 12);
        const usuario = await userSchema.create(req.body);
        res.json(usuario);
    } catch (error){
       res.json({
        error: error.message
       })
    }
}


const login = async(req,res) => {
    const user = await userSchema.findOne({email: req.body.email});
    if(!user){
      return res.json({error: 'email incorrecto'})
    }

    const pin = bcrypt.compareSync(req.body.password, user.password);
    if(!pin){
      return res.json({error: 'contraseña incorrecta'})
    }

    res.json({
        message: 'Login correcto', token: creartoken(user)
    })
}


function creartoken(user) {
   const payload = {
    user_id: user._id,
    user_name: user.usuario
   }
   return jwt.sign(payload, 'galeria de fotos')
}


module.exports = {
    crearuser,
    login
}