export const searchMovie = (titulo, peliculas, container) => {

  console.log(peliculas)
  const mipeli = peliculas.find((movie) => movie.Title.toLowerCase() === titulo.toLowerCase());
  
  console.log(mipeli)

  let contenido = `
    <h1>${mipeli.Title}</h1>
    <img src="${mipeli.Poster}" />
      <div class="hero-info">
      <span>${mipeli.Year}</span>
        <p>${mipeli.Value}</p>
        <span>${mipeli.Description}</span>
      </div>
  `
  console.log(contenido)

  if (mipeli != undefined) {
    container.innerHTML = contenido
  } else {
    alert('Su busqueda no arroja resultados')
  }
} 