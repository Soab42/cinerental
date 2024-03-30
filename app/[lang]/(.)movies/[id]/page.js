import Modal from "@/components/Modal";
import { getMovie } from "@/lib/getMovies";
import Image from "next/image";
import React from "react";

export default async function SinglePhotoPage({ params: { id } }) {
  const movie = await getMovie(id);
  return (
    <Modal>
      <section>
        <div>
          <Image
            className="w-full object-cover max-h-[300px] lg:max-h-[500px] bg-gradient-to-b from-black via-slate-500 to-black-"
            src={movie?.backdrop_path}
            alt={movie.title}
            width={500}
            height={500}
          />
        </div>

        <div className="grid grid-cols-12 py-12 gap-8">
          <div className="col-span-2">
            <img src={movie?.poster_path} alt={movie?.title} />
          </div>
          <div className="col-span-8">
            <h2 className="font-bold text-slate-300 text-2xl">
              {movie?.title}
            </h2>
            <p className="my-2 text-slate-400 italic">{movie?.overview}</p>
            <ul className="text-slate-300 space-y-2 my-8">
              <li>Release Date : {movie?.release_date}</li>
              <li>Average Vote : {movie?.vote_average}</li>
              <li>Vote Count : {movie?.vote_cpi}</li>
              <li>Popularity : {movie?.popularity}</li>
            </ul>
          </div>
          <div className="col-span-2 space-y-4">
            <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
              Stream In HD
            </button>
            <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
              Download In HD
            </button>
          </div>
        </div>
      </section>
    </Modal>
  );
}
