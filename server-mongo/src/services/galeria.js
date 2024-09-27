const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const fotoSchema = require('../models/galeria');


const crearfoto = async (req, res) => {
    try {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: 'galeria',
      });
  
      const nuevaFoto = new fotoSchema({
        titulo: req.body.titulo,
        foto: result.secure_url,
        descripcion: req.body.descripcion
      });
      const savedFoto = await nuevaFoto.save();
      res.json(savedFoto);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  const crearfotorestaurada = async (req, res) => {
    try {
      const nuevaFoto = new fotoSchema({
        titulo: req.body.titulo,
        foto: req.body.foto,
        descripcion: req.body.descripcion
      });
      const savedFoto = await nuevaFoto.save();
      res.json(savedFoto);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


const verfotos = (req,res) => {
    fotoSchema.find()
    .then((data)=> res.json(data))
    .catch((error) => res.json({message: error}));
}

const buscarfoto = (req,res) => {
    const {titulo} = req.params;
    fotoSchema.findOne({ titulo: new RegExp(titulo, 'i') })
    .then((data)=> res.json(data))
    .catch((error) => res.json({message: error}));
}


const eliminarfoto = (req,res) => {
    const {id} = req.params;
    fotoSchema.deleteOne({_id: id})
   .then((data)=> res.json(data))
   .catch((error) => res.json({message: error}));
}


module.exports = {
    crearfoto,
    verfotos,
    eliminarfoto,
    buscarfoto,
    crearfotorestaurada
}