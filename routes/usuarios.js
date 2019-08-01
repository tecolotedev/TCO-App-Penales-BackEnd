const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser')

//Models
const Usuarios = require('../models/usuarios');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.post('/registro',(req,res)=>{
    console.log(req.body);
    let usuario = new Usuarios({
        nombre: req.body.nombre,
        correo: req.body.correo,
        password: bcrypt.hashSync(req.body.password,10)
    });
    usuario.save((err,usuarioDB)=>{
        if(err){
            return res.json({
                ok:false,
                err
            });
        }
        let token = jwt.sign({
            usuario: usuarioDB
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