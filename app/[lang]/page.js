import MovieCard from "@/components/Movie";
import { getMovies } from "@/lib/getMovies";
import { getDictionary } from "./dictionary";

export default async function Home({ params: { lang } }) {
  const movies = await getMovies();
  const dictionary = await getDictionary(lang);

  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {movies?.map((movie) => (
          <MovieCard
            movie={movie}
            key={movie.id}
            dictionary={dictionary}
            lang={lang}
          />
        ))}
      </div>
    </div>
  );
}
