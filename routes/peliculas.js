const express = require('express');
const peliculasService = require('../service/peli_service.js')

function peliculasAPI(app) {
    const router = express.Router();
    app.use('/api/peliculas',router);

    const peliculasServicio = new peliculasService();

    router.get('/', async (request,response,next) =>{
        try {
           
            // const etiquetas = request.query;
            const peliculas = await Promise.resolve(peliculasServicio.getPeliculas());
            // console.log(peliculas)
            response.status(200).json({
                data:peliculas,
                message:'peliculas en orden ;)'
            })
            response.end()
        } catch (error) {
            next(error)
        }
    })
    router.get('/:id', async (request,response,next) =>{
        try {
           
            const ID = request.params.id;
            const pelicula = await Promise.resolve(peliculasServicio.getPelicula(ID));
            // console.log(peliculas)
            response.status(200).json({
                data:pelicula,
                message:'pelicula lista ;)'
            })
            response.end()
        } catch (error) {
            next(error)
        }
    })
    router.post('/', async (request,response,next) =>{
        try {
           
            const NAME = request.query.name;

            const pelicula = await Promise.resolve(peliculasServicio.createPelicula(NAME));
            // console.log(peliculas)
            response.status(200).json({
                data:pelicula,
                message:'Pelicula Añadida ;)'
            })
            response.end()
        } catch (error) {
            next(error)
        }
    })

    router.put('/:id', async (request,response,next) =>{
        try {
           
            const ID = request.params.id;
            const NAME = request.query.name;

            const pelicula = await Promise.resolve(peliculasServicio.updatePelicula(ID,NAME));
            // console.log(peliculas)
            response.status(200).json({
                data:pelicula,
                message:'Pelicula Editada ;)'
            })
            response.end()
        } catch (error) {
            next(error)
        }
    })

    router.delete('/:id', async (request,response,next) =>{
        try {
           
            const ID = request.params.id;

            const pelicula = await Promise.resolve(peliculasServicio.deletePelicula(ID));
            // console.log(peliculas)
            response.status(200).json({
                data:pelicula,
                message:'Pelicula Editada ;)'
            })
            response.end()
        } catch (error) {
            next(error)
        }
    })
    
};

module.exports = peliculasAPI