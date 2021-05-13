const fs = require('fs');
const {peliculasJSON} = require('../utils/peliculas.js');

class peliculasService {
    async getPeliculas () {
        const peliculas = await Promise.resolve(peliculasJSON);
        return peliculas || [];
    }

    async getPelicula(id){
        const peliculas = await Promise.resolve(peliculasJSON);
        let pelicula = peliculas.find(element => element.id === id);
        return pelicula || []
    }

    async createPelicula(name){
        const peliculas = await Promise.resolve(peliculasJSON);
        const newID = peliculas.length + 1;
        let newMovie = {"id":new String(newID), "titulo":new String(name)}
        // console.log(newMovie)
        peliculas.push(newMovie)
        return peliculas || [];
    }

    async updatePelicula(id,newName){
        const peliculas = await Promise.resolve(peliculasJSON);
        let peliculaIndex = peliculas.findIndex(element => element.id === id);
        peliculas[peliculaIndex].titulo = newName;
        
        return peliculas || [];
    }

    async deletePelicula(id){
        const peliculas = await Promise.resolve(peliculasJSON);
        const newList = peliculas.filter((element) => element.id !== id)

        return newList || []
    }
}

module.exports = peliculasService;