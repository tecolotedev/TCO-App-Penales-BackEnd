const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

let aportadoresSchema = new Schema({
    nombre:{
        type:String,
        required:[true,'El nombre de usuario es requerido']
    },
    correo:{
        type:String,
        required:[true,'El correo de usuario es requerido'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'La contraseña de usuario es requerida']
    }
},{
    writeConcern: {
        w: 'majority',
        j: true,
        wtimeout: 1000
      }
});

aportadoresSchema.methods.toJSON = function() { //Elimamos el password es el postman
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
}
aportadoresSchema.plugin(uniqueValidator,{
    message: '{PATH} debe ser unico '
});
module.exports = mongoose.model('Aportadores', aportadoresSchema);