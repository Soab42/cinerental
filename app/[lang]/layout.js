import Footer from "@/components/Footer";
import "../globals.css";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";

export const metadata = {
  title: "Cine Rental | Learn with Sumit",
  description: "Cine Rental project by Learn with Sumit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body class="dark:bg-body bg-white font-[Sora] dark:text-white text-dark">
        <Navbar />
        <main className="pt-24">
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem] relative">
            <SideBar />
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}