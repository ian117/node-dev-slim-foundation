// const os = require('os');
const fs = require('fs');
// const process = require('process')
const file = process.argv[2]
// console.log('Información del SUPAH PC: ', os.cpus());

// console.log("IP: ", os.networkInterfaces())

// console.log("Free mem: ", os.freemem())

// console.log('SO Type: ', os.type(), os.release())

if (!file) {
    throw new Error(
        'Indica el archivo que quieres leer mi pana'
    )
}

const content = fs.readFile(file, (err, content) => {
    if (err) {
        return console.log(err)
    }

    const lineas = content.toString().split('\n').length
    console.log("Numero de lineas: ", lineas)
})