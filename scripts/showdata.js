export const showData = (movies,container,tipo) =>{
    const tipomovie = movies.filter((movie)=>movie.Type === tipo);
    console.log(tipomovie)

    tipomovie.forEach(movie => {

        const image = document.createElement('img');
        image.classList.add('poster');
        image.setAttribute('src',movie.Poster);

        container.appendChild(image);
    });
} 