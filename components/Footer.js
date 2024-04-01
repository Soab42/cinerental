import React from "react";

export default function Footer({ dictionary }) {
  return (
    <footer className="py-6 md:py-8 mt-8">
      <div className="container mx-auto">
        <p className="text-center text-sm text-black/30 dark:text-[#EEEEEE]/60">
          {dictionary.footer}
        </p>
      </div>
    </footer>
  );
}
