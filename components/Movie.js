import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Movie({ movie, dictionary, lang }) {
  return (
    <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl flex flex-col justify-between">
      <Image
        height={1000}
        width={700}
        className="w-full object-cover image-loader"
        src={movie.poster_path}
        alt={movie.title}
      />
      <figcaption className="pt-4">
        <h3 className="text-xl mb-1">{movie.title}</h3>
        <p className="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
        <div className="flex items-center space-x-1 mb-5">
          <Image src="/assets/star.svg" width="14" height="14" alt="" />
          <Image src="/assets/star.svg" width="14" height="14" alt="" />
          <Image src="/assets/star.svg" width="14" height="14" alt="" />
          <Image src="/assets/star.svg" width="14" height="14" alt="" />
          <Image src="/assets/star.svg" width="14" height="14" alt="" />
        </div>
        <Link
          href={`/${lang}/movies/${movie.id}`}
          scroll={false}
          className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
        >
          <Image height={20} width={20} src="/assets/tag.svg" alt="icon" />
          <span>{dictionary.details}</span>
        </Link>
      </figcaption>
    </figure>
  );
}
