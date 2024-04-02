import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] gap-10 text-2xl">
      <h2 className="text-3xl">This requested page was not found!</h2>

      <p>
        Go back to
        <Link href="/" className="p-2 text-black rounded-md mx-2 bg-primary">
          Home Page
        </Link>
        page
      </p>
    </div>
  );
}
