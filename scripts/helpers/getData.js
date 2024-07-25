// es para leer la información que tendo en la url es decir leer mi data.json

export const getData = async (url) => {
  try {
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log("Hay un error en el sistema", error);
  }
}