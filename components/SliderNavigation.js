/* eslint-disable @next/next/no-async-client-component */
"use client";
import { getMovies } from "@/lib/getMovies";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React from "react";

export default function SliderNavigation() {
  const { id, lang } = useParams();
  const router = useRouter();
  const handleClick = async (value) => {
    const movies = await getMovies();
    const currentIndex = movies.findIndex((m) => m.id == id);
    let nextIndex = currentIndex + value;
    if (nextIndex < 0) {
      nextIndex = movies.length - 1; // Wrap around to the end of the list
    } else if (nextIndex >= movies.length) {
      nextIndex = 0; // Wrap around to the beginning of the list
    }
    const nextId = movies[nextIndex].id;
    router.push(`/${lang}/movies/${nextId}`);
  };
  return (
    <div className="flex justify-between absolute w-full left-0 top-[40%] px-5 opacity-20 hover:opacity-80 duration-500">
      <button onClick={() => handleClick(-1)}>
        <Image
          width={50}
          height={50}
          src="/assets/left.svg"
          alt="left"
          className="text-red-400"
        />
      </button>
      <button onClick={() => handleClick(1)}>
        <Image width={50} height={50} src="/assets/right.svg" alt="left" />
      </button>
    </div>
  );
}
