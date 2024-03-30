import React from "react";
import Movie from "./Movie";
import { getMovies } from "@/lib/getMovies";

// async function getMovies() {
//   const res = import("@/lib/movies.json").then((module) => module.default);
//   return res;
// }

export default async function Main() {
  // const movies = await getMovies();
  const movies = await getMovies();
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {movies?.map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
