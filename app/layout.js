/* eslint-disable @next/next/no-page-custom-font */
import "./globals.css";

export const metadata = {
  title: "Cine Rental | Learn with Sumit",
  description: "Cine Rental project by Learn with Sumit",
};

export default function RootLayout({ children }) {
  return (
    <html className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="dark:bg-body bg-white font-[Sora] dark:text-white text-dark">
        {children}
      </body>
    </html>
  );
}
