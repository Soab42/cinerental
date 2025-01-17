import Link from "next/link";

export default async function NotFound() {
  const notFoundGlobal = {
    message: "This requested page was not found!",
    btnName: "Home Page",
    message2: " Go back to ",
  };
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] gap-10 text-2xl">
      <h2 className="text-3xl">{notFoundGlobal.message}</h2>

      <p>
        {notFoundGlobal.message2}

        <Link href="/" className="p-2 text-black rounded-md mx-2 bg-primary">
          {notFoundGlobal.btnName}
        </Link>
      </p>
    </div>
  );
}
