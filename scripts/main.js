import { movies } from "./helpers/urls.js";
import { getData } from "./helpers/getData.js";
import { showData } from "./showdata.js";

const peliculas = await getData(movies);
const infantiles = document.getElementById('infantil');
const series = document.getElementById('series');
const adultos = document.getElementById('adultos');

console.log(peliculas);

// peliculas.forEach(element => {
//     console.log(element.Type)
// });
showData(peliculas,series,"serie")
showData(peliculas,infantiles,"Infantil")
showData(peliculas,adultos,"Adulto")