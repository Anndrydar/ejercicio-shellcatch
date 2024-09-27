const mongoose = require('mongoose');

const papeleraSchema = mongoose.Schema({
titulo:{
    type: String,
    require: true
},
foto:{
    type: String,
    require: true
},
descripcion: {
    type: String,
    require: true
}
});

module.exports = mongoose.model('papelera',papeleraSchema);