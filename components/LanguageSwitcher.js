"use client";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { languages } from "../app/[lang]/dictionaries/language";

export default function LanguageSwitcher() {
  const router = useRouter();
  const { lang } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [activeLang, setActiveLang] = useState();
  const handleChange = (newLang) => {
    // Replace the language code
    router.push(`/${newLang}`); // Push the new path to the router
    setIsOpen(false); // Close any open dropdown or menu
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const currentLanguage = languages.find(
      (language) => language.langCode === lang
    );
    setActiveLang(currentLanguage);
  }, [lang]);
  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className="bg-inherit w-36 border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-primary hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
      >
        <div className="flex justify-center items-center gap-2">
          <p>{activeLang?.displayName}</p>
          <Image
            src={activeLang?.imageSrc}
            width={20}
            height={20}
            alt={activeLang?.alt}
          />
        </div>
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 w-36 rounded-md bg-dark shadow-lg origin-top-left ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {languages.map((language) => (
              <button
                onClick={() => handleChange(language.langCode)}
                key={language.langCode}
                className="flex justify-center items-center  gap-4 w-full px-4 py-2 text-sm text-light hover:bg-slate-700 hover:text-primary/80"
              >
                {language.displayName}
                <Image
                  src={language.imageSrc}
                  width={20}
                  height={20}
                  alt="en"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
