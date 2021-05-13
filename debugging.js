const fs = require('fs');
const util = require('util');

// const out = fs.createWriteStream('./out.log');
// const err = fs.createWriteStream('./err.log');

// const archivoDeConsola = new console.Console(out,err);

// setInterval(() => {
//     archivoDeConsola.log(new Date());

//     archivoDeConsola.error(new Error("Oooops"));
// }, 2000)

const mensajeDeDepuracion = util.debuglog("Pauta1");

mensajeDeDepuracion("Al parecer esto es Depuración");