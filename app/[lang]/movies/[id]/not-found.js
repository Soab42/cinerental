"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function NotFound() {
  const { id } = useParams();
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] gap-10 text-2xl">
      <h2 className="text-3xl">
        This movie with <span className="text-emerald-400">{id}</span> id was
        not found!
      </h2>

      <p>
        Go back to
        <Link href="/" className="p-2 text-black rounded-md mx-2 bg-primary">
          All Movies
        </Link>
        page
      </p>
    </div>
  );
}
