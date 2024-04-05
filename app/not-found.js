// import { headers } from "next/headers";
import Link from "next/link";
// import { getDictionary } from "./[lang]/dictionary";
// import { getParams } from "@/utils/getParams";

export default async function NotFound() {
  // const params = await getParams(headers);
  // const { notFoundGlobal } = await getDictionary(params?.lang);
  const notFoundGlobal = {
    message: "This requested page was not found!",
    btnName: "Home Page",
    message2: " Go back to ",
  };
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] gap-10 text-2xl">
      <h2 className="text-3xl">{notFoundGlobal.message}</h2>

      <p>
        <Link href="/" className="p-2 text-black rounded-md mx-2 bg-primary">
          {notFoundGlobal.btnName}
        </Link>
        {notFoundGlobal.message2}
      </p>
    </div>
  );
}
