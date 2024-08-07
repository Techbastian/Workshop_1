import { movies } from "./helpers/urls.js";
import { getData } from "./helpers/getData.js";
import { showData } from "./showdata.js";
import { postData } from "./helpers/postData.js";
import { searchMovie } from "./searchMovie.js";

const peliculas = await getData(movies);

//secciones para publicar las peliculas
const infantiles = document.getElementById('infantil');
const series = document.getElementById('series');
const adultos = document.getElementById('adultos');
const principal = document.getElementById('principal');

//botones para abrir y cerrar el modal, mas el modal
const crear = document.getElementById('crear');
const cerrar = document.getElementById('close');
const modal = document.getElementById('modal');

//formulario para agregar una nueva pelicula
const formularocrear = document.getElementById('create-movie');

showData(peliculas, series, "serie")
showData(peliculas, infantiles, "Infantil")
showData(peliculas, adultos, "Adulto")

formularocrear.addEventListener("submit", async (e) => {
    e.preventDefault();
    let npeliculas = peliculas.length;
    let newmovie = {
        "id": npeliculas,
        "Year": document.getElementById('year').value,
        "Value": document.getElementById('value').value,
        "Type": document.getElementById('type').value,
        "Trailer": document.getElementById('trailer').value,
        "Title": document.getElementById('title').value,
        "Poster": document.getElementById('poster').value,
        "Description": document.getElementById('descrip').value,
        "Carrusel": document.getElementById('carrusel').value
    }
    await postData(movies, newmovie)
    modal.close();
    npeliculas++;
})

crear.addEventListener("click", () => {
    modal.showModal();
});

cerrar.addEventListener("click", function () {
    favDialog.close();
});

//Input para buscar una pelicula
const btnbuscar = document.getElementById('busca')
const buscapeli = document.getElementById('busqueda')

btnbuscar.addEventListener("click",() => {
    buscapeli.style.display = "block"
})

buscapeli.addEventListener("change",(e)=>{
    console.log(buscapeli.value)
    buscapeli.style.display = "none"
    searchMovie(buscapeli.value,peliculas,principal)
})