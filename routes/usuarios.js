const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser')

//Models
const Aportadores = require('../models/aportador');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.post('/registro',(req,res)=>{
    console.log(req.body);
    let aportador = new Aportadores({
        nombre: req.body.nombre,
        correo: req.body.correo,
        password: bcrypt.hashSync(req.body.password,10)
    });
    aportador.save((err,aportadorDB)=>{
        if(err){
            return res.json({
                ok:false,
                err
            });
        }
        let token = jwt.sign({
            usuario: aportador
        }, process.env.SEED_PROD, { expiresIn: '48h' });

        res.json({ok:true,token});
    });
});





// app.get('/login',(req,res)=>{
//     res.json({
//         hola:'hola'
//     });
// })

module.exports = app;