import Image from "next/image";
import React from "react";

export default async function SideBar({ dictionary }) {
  return (
    <aside className="relative">
      <ul className="space-y-2 sticky top-24">
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
            href="#"
          >
            <Image
              src="/assets/icons/trending.svg"
              width="24"
              height="24"
              alt=""
            />
            <span>{dictionary.trending}</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image
              src="/assets/icons/newRelease.svg"
              width="24"
              height="24"
              alt=""
            />
            <span>{dictionary.newRelease}</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image
              src="/assets/icons/commingSoon.svg"
              width="24"
              height="24"
              alt=""
            />
            <span>{dictionary.comingSoon}</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image
              src="/assets/icons/favourite.svg"
              width="24"
              height="24"
              alt=""
            />
            <span>{dictionary.favourites}</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image
              src="/assets/icons/watchLater.svg"
              width="24"
              height="24"
              alt=""
            />
            <span>{dictionary.watchLater}</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}
