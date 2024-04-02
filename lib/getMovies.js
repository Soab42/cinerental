export const getMovies = () =>
  import("./data.json")
    .then((module) => {
      return module.default;
    })
    .catch((error) => console.error(error));

export const getMovie = (id) =>
  import("./data.json")
    .then(async (module) => {
      const data = await module.default;
      const movie = data.find((movie) => movie.id == id);
      return movie;
    })
    .catch((error) => console.error(error));
