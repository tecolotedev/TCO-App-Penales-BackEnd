const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let penalPendientesSchema = new Schema({
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
    },
    votosPositivos:{
        type:Number,
        default:0
    },
    votosNegativos:{
        type:Number,
        default:0
    },
    aprobado:{
        type:Boolean,
        default:false,
    },
    oculto:{
        type:Boolean,
        default:false
    },
    votado:{
        type:Number,
        default:0
    }
});


module.exports = mongoose.model('PenalesPendientes', penalPendientesSchema);