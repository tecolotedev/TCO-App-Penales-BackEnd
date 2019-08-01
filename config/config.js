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
let urlDB='';
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/penalesDev'
} else {
    urlDB = process.env.MONGO_URI; // Variables de entorno personalizadas de Heroku o en produccion'
}
process.env.URLDB = urlDB;


//=====================
//=====SEMILLA JWT=====
//=====================
process.env.SEED_PROD = 'semillaDev';
