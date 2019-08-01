require('./config/config.js')
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

app.use(require('./routes/index.routes'));



app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



mongoose.connect(process.env.URLDB,{ useNewUrlParser: true }, (err, res) => {
    if (err) throw err;
    console.log('Base de Datos Online');
});

app.listen(process.env.PORT,()=>{
    console.log(`Escuchando puerto: ${process.env.PORT}`);
})