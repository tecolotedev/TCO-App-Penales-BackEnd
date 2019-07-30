const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let penalValidosSchema = new Schema({
    equipo1:{
        type:String,
        required:[true,'El equipo 1 es necesario']
    },
    equipo2:{
        type:String,
        required:[true,'El equipo 2 es necesario']
    },
    liga:{
        type:String,
        required:[true,'La liga es necesaria']
    },
    url:{
        type:String,
        required:[true,'El url es necesario']
    },
    fechaPublicacion:{
        type:Date,
        required:[true,'La fecha de publicacion es necesaria']
    }
});


module.exports = mongoose.model('PenalesValidos', penalValidosSchema);