const papeleraSchema = require('../models/papelera');


const crearfotopapelera = async (req, res) => {
    try {
      const nuevaFoto = new papeleraSchema({
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



const verfotosborradas = (req,res) => {
    papeleraSchema.find()
    .then((data)=> res.json(data))
    .catch((error) => res.json({message: error}));
}

const buscarfotoborrada = (req,res) => {
    const {titulo} = req.params;
    papeleraSchema.findOne({ titulo: new RegExp(titulo, 'i') })
    .then((data)=> res.json(data))
    .catch((error) => res.json({message: error}));
}


const eliminardepapelera = (req,res) => {
    const {id} = req.params;
    papeleraSchema.deleteOne({_id: id})
   .then((data)=> res.json(data))
   .catch((error) => res.json({message: error}));
}


module.exports = {
    crearfotopapelera,
    verfotosborradas,
    eliminardepapelera,
    buscarfotoborrada
}