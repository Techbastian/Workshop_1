export const searchHero = (titulo, data) => {
  const result = data.filter((movie) => movie.title.toLowerCase().includes(titulo.toLowerCase()))
  return result;
}