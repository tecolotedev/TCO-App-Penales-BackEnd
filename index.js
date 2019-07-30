require('./config/config.js')
const express = require('express');
const app = express();
const mongoose = require('mongoose');


app.use(require('./routes/index.routes'));



mongoose.connect(process.env.URLDB, (err, res) => {
    if (err) throw err;
    console.log('Base de Datos Online');
});

app.listen(process.env.PORT,()=>{
    console.log(`Escuchando puerto: ${process.env.PORT}`)
})