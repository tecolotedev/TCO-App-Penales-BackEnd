/////////////////////////
/////PUERTO APP /////////
/////////////////////////
process.env.PORT = process.env.PORT || 5000;

/////////////////////////
////777/ENTORNO /////////
/////////////////////////

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'; // dev == local

//=====================
//=====BASE DATOS======
//=====================
let urlDB='mongodb://localhost:27017/tco';
// if (process.env.NODE_ENV === 'dev') {
//     urlDB = 'mongodb://localhost:27017/TCO'
// } else {
//     urlDB = process.env.MONGO_URI; // Variables de entorno personalizadas de Heroku o en produccion'
// }
process.env.URLDB = urlDB;
