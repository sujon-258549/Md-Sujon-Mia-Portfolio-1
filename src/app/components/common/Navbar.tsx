/* eslint-disable prefer-const */
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons from react-icons
import Banner from "../home/Banner";
import Services from "../home/Services";
import Project from "../home/Project";
import Contact from "../home/Contact";
import Footer from "../home/Footer";
import Education from "../home/Education";
import SkillsTab from "../home/Skills/SkillsTab";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "services", "skills", "project", "contact"];
      let currentSection = "home";

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav
        id="home"
        style={{ zIndex: "999", borderBottom: "1px solid white", backgroundColor: '#424242' }}
        className="shadow dark:bg-customBg sticky top-0 left-0"
      >
        <div className="max-w-6xl px-5 py-4 mx-auto">
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
                  {!isOpen ? <FaBars size={24} /> : <FaTimes size={24} />}
                </button>
              </div>
            </div>

            {/* Mobile Menu open: "block", Menu closed: "hidden" */}
            <div
              className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-[#1D1C21] lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
                }`}
            >
              <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                {[
                  { id: "about", label: "About" },
                  { id: "services", label: "Services" },
                  { id: "skills", label: "Skills" },
                  { id: "project", label: "Project" },
                  { id: "contact", label: "Contact" },
                ].map(({ id, label }) => (
                  <button
                    key={id}
                    className={`px-3 py-2 text-left mx-3 mt-2 text-white hover:text-black font-semibold  transition-colors duration-300 transform  lg:mt-0  hover:bg-gray-100 dark:hover:bg-gray-700 ${activeSection === id
                      ? "border-b-[3px] dark:text-customSion border-customSion"
                      : "dark:text-gray-200"
                      }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(id);
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="bg-[#424242]">
        <section className="max-w-6xl mx-auto" id="about">
          <Banner />
          <Education />
        </section>
        <section className="max-w-6xl mx-auto" id="services">
          <Services />
        </section>
        <section className="max-w-6xl mx-auto" id="skills">
          <SkillsTab />
        </section>
        <section className="max-w-6xl mx-auto" id="project">
          <Project />
        </section>
        <section className="max-w-6xl px-6 mx-auto" id="contact">
          <Contact />
        </section>
        <section style={{ backgroundColor: "#424242" }}>
          <div className="max-w-6xl px-6 mx-auto">
            <Footer />
          </div>
        </section>
      </main>
    </>
  );
};

export default Navbar;
