const express = require('express');
const app = express();

app.get('/login',(req,res)=>{
    res.json({
        hola:'hola'
    })
})

module.exports = app;