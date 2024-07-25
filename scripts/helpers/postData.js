//  Post es para agregar información en la data.json

export const postData = async (url, data) => {
  try {
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-Type': 'aplication/json'
      }
    }).then(
      alert('La pelicula fue agregada con exito')
    );
    // const data = await respuesta.json();
    // console.log(data);

  } catch (error) {
    console.log("Hay un error en el sistema", error);
  }
}