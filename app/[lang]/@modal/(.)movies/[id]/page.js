import { getDictionary } from "@/app/[lang]/dictionary";
import Modal from "@/components/Modal";
import SliderNavigation from "@/components/SliderNavigation";
import { getMovie } from "@/lib/getMovies";
import Image from "next/image";
import React from "react";

export default async function SingleParallelMoviePage({
  params: { id, lang },
}) {
  const movie = await getMovie(id);
  const dictionary = await getDictionary(lang);
  return (
    <Modal>
      <section className="">
        <div className="fade-out">
          <Image
            className="w-full object-cover max-h-[300px] lg:max-h-[500px] image-loader "
            src={movie?.backdrop_path}
            alt={movie?.title}
            height={1200}
            width={1900}
          />
        </div>

        <div className="grid grid-cols-12 py-12 gap-8 ">
          <div className="col-span-2">
            <Image
              src={movie?.poster_path}
              alt={movie?.title}
              height={720}
              width={460}
              className="image-loader"
            />
          </div>
          <div className="col-span-8 fade-in">
            <h2 className="font-bold text-slate-300 text-2xl">
              {movie?.title}
            </h2>
            <p className="my-2 text-slate-400 italic">{movie?.overview}</p>
            <ul className="text-slate-300 space-y-2 my-8">
              <li>
                {dictionary.releaseDate} : {movie?.release_date}
              </li>
              <li>
                {dictionary.averageVote} : {movie?.vote_average}
              </li>
              <li>
                {dictionary.voteCount} : {movie?.vote_count}
              </li>
              <li>
                {dictionary.popularity} : {movie?.popularity}
              </li>
            </ul>
          </div>
          <div className="col-span-2 space-y-4">
            <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
              {dictionary.streamInHd}
            </button>
            <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
              {dictionary.downloadInHD}
            </button>
          </div>
        </div>
      </section>
      <SliderNavigation />
    </Modal>
  );
}
