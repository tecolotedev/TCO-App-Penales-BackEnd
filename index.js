require('./config/config.js')
const express = require('express');
const app = express();

app.use(require('./routes/index.routes'));


app.listen(process.env.PORT,()=>{
    console.log(`Escuchando puerto: ${process.env.PORT}`)
})