const express = require('express');
const app = express();
const bodyParser = require('body-parser')

//Models
const PenalesP = require('../models/penalesPendientes');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//------------------PENALES APROBADOS------------------------------
app.get('/penalesA',(req,res)=>{
    PenalesP.find({aprobado:true,oculto:false},(err,penalesA)=>{
        if(err){
            return res.json({
                ok:false,
                err
            });
        }
        res.json({
            ok:true,
            penalesA
        })
    });
});

//------------------PENALES NO APROBADOS---------------------------
const hacerAprobado = id =>{
    PenalesP.findByIdAndUpdate(id,{aprobado:true},(err,penal)=>{
        if(err) console.log(err);
    });
}
const denegarPost = id =>{
    PenalesP.findByIdAndUpdate(id,{oculto:true},(err,penal)=>{
        if(err) console.log(err);
    });
}
app.put('/penalesp',(req,res)=>{
    const {_id,flecha} = req.body;
    if(flecha=="up"){
        PenalesP.findByIdAndUpdate(_id,{$inc:{votosPositivos:1},votado:1},(err,penal)=>{
            if(err) return res.json({ok:false,err});
            if(penal.votosPositivos>=5){
                hacerAprobado(_id);
            }
        });
    }else{
        PenalesP.findByIdAndUpdate(_id,{$inc:{votosNegativos:1},votado:-1},(err,penal)=>{
            if(err) return res.json({ok:false,err});
            if(penal.votosNegativos>=5){
                denegarPost(_id);
            }
        });
    } 
});
app.get('/penalesp',(req,res)=>{
    PenalesP.find({aprobado:false,oculto:false},(err,penalesP)=>{
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
