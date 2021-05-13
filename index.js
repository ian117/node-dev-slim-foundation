// const http = require('http');
// const PORT = 8000;

// const server = http.createServer((request, response) => {
//     response.write('<h1>Esto es lo que hicimos en this<h1/>');
//     response.end()
// })

// server.listen(PORT)

const express = require('express')
const colors = require('colors');
const {config} = require('./server')
const bodyParser = require('body-parser');
const peliculasAPI = require('./routes/peliculas.js')

const server = express()
const port = 3000;

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

peliculasAPI(server);

server.listen(port, () => {
    console.log(`Example app listening on port`.green)
    console.log(config.port)
})


// server.get('/', (req, res) => {
//     res.write('Hello WWWW!')
//     res.end()
// })