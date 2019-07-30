const express = require('express');
const app = express();
const bodyParser = require('body-parser')

//Models
const PenalesV = require('../models/penalesValidos');
const PenalesP = require('../models/penalesPendientes');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/penalesp',(req,res)=>{
    PenalesP.find({},(err,penalesP)=>{
        if(err){
            return res.json({
                ok:false,
                err
            });
        }
        res.json({
            ok:true,
            penalesP
        })
    });
});
app.post('/penalesp',(req,res)=>{
    let {equipo1,equipo2,liga,url} = req.body;
    let penal = new PenalesP({
        equipo1,
        equipo2,
        liga,
        url,
        fechaPublicacion: new Date()
    });
    penal.save((err,penalDB)=>{
        if(err){
            return res.json({
                ok:false,
                err
            });
        }
        res.json({
            ok:true
        });
    })
});


module.exports = app;
