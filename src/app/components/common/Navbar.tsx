"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons from react-icons
import Banner from "../home/Banner";
import Services from "../home/Services";
import Skills from "../home/Skills";
import Project from "../home/Project";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        style={{ zIndex: "999" }}
        className="bg-white shadow dark:bg-customBg sticky top-0 left-0"
      >
        <div className="max-w-6xl px-6 py-4 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              <a href="#">
                <Image height={20} width={150} src="/sujon.png" alt="Logo" />
              </a>

              {/* Mobile menu button */}
              <div className="flex lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  {!isOpen ? (
                    <FaBars size={24} /> // Hamburger icon (open menu)
                  ) : (
                    <FaTimes size={24} /> // Close icon (close menu)
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu open: "block", Menu closed: "hidden" */}
            <div
              className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-[#1D1C21] lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "opacity-0 -translate-x-full"
              }`}
            >
              <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                <button
                  className="px-3 py-2 text-left mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {" "}
                  <Link href="">Home</Link>
                </button>

                <button
                  className="px-3 py-2 text-left mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {" "}
                  <Link href="">About</Link>
                </button>
                <button
                  className="px-3 py-2 text-left mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {" "}
                  <Link href="">Skills</Link>
                </button>
                <button
                  className="px-3 py-2 text-left mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {" "}
                  <Link href="">Project</Link>
                </button>
                <button
                  className="px-3 py-2 text-left mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {" "}
                  <Link href="">Contact</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main className="bg-customBg">
        <section className="max-w-6xl mx-auto">
          <Banner />
        </section>
        <section className="max-w-6xl mx-auto">
          <Services />
        </section>
        <section className="max-w-6xl mx-auto">
          <Skills />
        </section>
        <section className="max-w-6xl mx-auto">
          <Project />
        </section>
      </main>
    </>
  );
};

export default Navbar;
