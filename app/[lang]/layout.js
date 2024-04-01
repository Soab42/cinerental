/* eslint-disable @next/next/no-page-custom-font */
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";
import { getDictionary } from "./dictionary";

export default async function MoviesLayout({
  children,
  modal,
  params: { lang },
}) {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <Navbar dictionary={dictionary} />
      <main className="pt-24">
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem] relative">
          <SideBar dictionary={dictionary} />
          {children}
          {modal}
        </div>
      </main>
      <Footer dictionary={dictionary} />
    </>
  );
}
