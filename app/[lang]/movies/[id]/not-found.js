import { getParams } from "@/utils/getParams";
import { headers } from "next/headers";
import Link from "next/link";
import { getDictionary } from "../../dictionary";

export default async function NotFound() {
  const { id, lang } = await getParams(headers);
  const { notFoundMovie } = await getDictionary(lang);
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] gap-10 text-2xl">
      <h2 className="text-3xl">
        {notFoundMovie.message1} <span className="text-emerald-400">{id}</span>{" "}
        {notFoundMovie.message2}
      </h2>

      <p>
        {notFoundMovie.message3}
        <Link href="/" className="p-2 text-black rounded-md mx-2 bg-primary">
          {notFoundMovie.btnName}
        </Link>
      </p>
    </div>
  );
}
