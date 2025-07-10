"use client";
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { IoServerSharp } from "react-icons/io5";
import "./h.css";
import "./s.css";

interface ProjectLink {
  label: "GitHub" | "Server" | "Live";
  icon: React.ReactNode;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  links: ProjectLink[];
  keyFeatures: string[];
  techStack: string[];
}
import { Database, Github, Target } from "lucide-react";
import { Details } from "./Details";
const projects: Project[] = [
  {
    id: "01",
    title: "Meal Box",
    description:
      "Meal Box is a convenient meal subscription platform designed to deliver fresh, chef-prepared meals directly to customers' doorsteps. Built with React, Node.js, and MongoDB, this full-stack application offers a seamless user experience with features like customizable meal plans, secure payments, and real-time order tracking",
    image: "/project1.jpg",
    keyFeatures: [
      "User-friendly dashboard for customizing weekly meal boxes",
      "Secure and seamless checkout with Stripe integration",
      "Admin panel for managing meals, subscriptions, and orders",
      "Responsive design optimized for mobile, tablet, and desktop",
      "Nutritional info and dietary filters for personalized choices",
      "Subscription management for weekly or monthly deliveries",
      "Real-time delivery tracking and status updates",
    ],

    techStack: [
      "Next js – Frontend UI development",
      "Tailwind CSS – Utility-first CSS framework",
      "TypeScript – for type-safe, scalable JavaScript development",
      "Node.js – Backend runtime environment",
      "Express.js – Backend server framework",
      "MongoDB – NoSQL database",
      "Mongoose – ODM for MongoDB",
      "JWT – Authentication and route protection",
      "SSLcommarize API – Payment gateway integration",
      "React Router – Client-side routing",
      "Cloudinary – Image upload and storage (optional)",
      "dotenv – Environment variable management",
    ],
    links: [
      {
        label: "GitHub",
        icon: <FaGithub />,
        url: "https://github.com/sujon-258549/meal-box-client-tem.git",
      },
      {
        label: "Server",
        icon: <IoServerSharp />,
        url: "https://github.com/sujon-258549/meal-box-server--team.git",
      },
      {
        label: "Live",
        icon: <FiExternalLink />,
        url: "https://meal-box-client-2.vercel.app",
      },
    ],
  },
  {
    id: "02",
    title: "Char Shop",
    description:
      "Char Shop is a modern e-commerce platform tailored for selling digital character assets, ideal for gamers, designers, and content creators. Built using React.js, Node.js, MongoDB, and Stripe, it provides a smooth, secure shopping experience with fast loading speeds and responsive design. Users can explore a variety of unique characters, view detailed previews, and make purchases with ease using a fully integrated checkout system. The admin panel allows for inventory management, customer order tracking, and analytics insights. Char Shop also supports user authentication, allowing buyers to manage their order history and wishlist. With intuitive navigation, mobile compatibility, and reliable performance, Char Shop stands out as a streamlined marketplace for digital character assets. It ensures both creators and buyers enjoy a seamless and secure environment for commerce, making it the perfect solution for niche digital product sales.",
    image: "/project2.png",
    keyFeatures: [
      "Browse and preview detailed car listings with images",
      "Secure Stripe-based checkout for vehicle booking or purchase",
      "Admin panel for managing cars, inventory, and orders",
      "Responsive UI optimized for both mobile and desktop users",
      "Advanced filtering by brand, model, year, and price range",
      "User authentication for buyers and admins",
      "Booking and inquiry system for test drives or consultations",
      "Real-time availability and stock updates",
    ],

    techStack: [
      "React.js – for building dynamic and modular user interfaces",
      "TypeScript – for type-safe, scalable JavaScript development",
      "Redux – for managing global state efficiently across components",
      "Tailwind CSS – utility-first CSS framework for responsive design",
      "Surjo pay API – Payment gateway integration",
      "Ant Design – a robust UI component library for faster development",
      "Node.js – backend runtime environment for executing JavaScript server-side",
      "Express.js – minimalist backend framework for creating REST APIs",
      "MongoDB – NoSQL database to store product and user data",
      "Mongoose – for schema-based modeling with MongoDB",
      "JWT (JSON Web Token) – for secure user authentication and session management",
      "bcrypt (npm) – for hashing passwords securely in the authentication process",
      "Stripe API – for integrating secure online payment processing",
    ],
    links: [
      {
        label: "GitHub",
        icon: <FaGithub />,
        url: "https://github.com/sujon-258549/assungment-4-car-frontend.git",
      },
      {
        label: "Server",
        icon: <IoServerSharp />,
        url: "https://github.com/sujon-258549/level-2-assignment-2.git",
      },
      {
        label: "Live",
        icon: <FiExternalLink />,
        url: "https://car-shop-one-indol.vercel.app",
      },
    ],
  },
  {
    id: "04",
    title: "Alternative Product Suggestion Platform",
    description: `Developed an intelligent Product Suggestion Platform that helps users discover personalized product recommendations based on their preferences and browsing behavior. The platform uses user inputs along with advanced filtering techniques to deliver tailored suggestions, enhancing user engagement and satisfaction.
Built with React.js for a dynamic and responsive user interface, combined with efficient state management to handle real-time updates smoothly. The backend integrates seamlessly with APIs to fetch accurate and up-to-date product data. Styled using Tailwind CSS to provide a clean, modern look, the platform is fully responsive and optimized for both mobile and desktop devices.`,
    image: "/project4.png",
    keyFeatures: [
      "AI-powered alternative product suggestions",
      "Real-time product recommendations based on availability and pricing",
      "Side-by-side product comparison with feature, price, and rating insights",
      "Fast and responsive search with category-based filtering",
      "User-friendly, responsive UI optimized for mobile and desktop",
      "E-commerce integration support for seamless store adoption",
      "Scalable architecture with future ML model integration readiness",
    ],
    techStack: [
      "React.js – for building dynamic and modular user interfaces",
      "TypeScript – for type-safe, scalable JavaScript development",
      "Redux – for managing global state efficiently across components",
      "Tailwind CSS – utility-first CSS framework for responsive design",
      "Ant Design – a robust UI component library for faster development",
      "Node.js – backend runtime environment for executing JavaScript server-side",
      "Express.js – minimalist backend framework for creating REST APIs",
      "MongoDB – NoSQL database to store product and user data",
      "Mongoose – for schema-based modeling with MongoDB",
      "JWT (JSON Web Token) – for secure user authentication and session management",
      "bcrypt (npm) – for hashing passwords securely in the authentication process",
      "Stripe API – for integrating secure online payment processing",
    ],
    links: [
      {
        label: "GitHub",
        icon: <FaGithub />,
        url: "https://github.com/sujon-258549/Alternative-product-client-2.git",
      },
      {
        label: "Server",
        icon: <IoServerSharp />,
        url: "https://github.com/sujon-258549/Alternative-product-server-2",
      },
      {
        label: "Live",
        icon: <FiExternalLink />,
        url: "https://altranative-product-client.vercel.app",
      },
    ],
  }
  ,
  {
    id: "03",
    title: "AbulKhair Group Corporate Blog Platform",
    description:
      "A sleek and responsive corporate website built for Abul Khair Group, one of the largest industrial conglomerates in Bangladesh. This website showcases the company’s diverse business sectors — including cement, steel, dairy, and tobacco — while providing an intuitive experience for users across all devices.Built with Next.js for high performance and Tailwind CSS for clean UI, the platform highlights company achievements, products, and contact options. The site is fully optimized for SEO and speed, hosted on Vercel for global reach",
    image: "/project3.jpg",
    keyFeatures: [
      "AI-powered alternative product suggestions",
      "Real-time product recommendations based on availability and pricing",
      "Side-by-side product comparison with feature, price, and rating insights",
      "Fast and responsive search with category-based filtering",
      "User-friendly, responsive UI optimized for mobile and desktop",
      "E-commerce integration support for seamless store adoption",
      "Scalable architecture with future ML model integration readiness",
    ],
    techStack: [
      "Next js.js – frontend framework for building dynamic UIs",
      "Tailwind CSS – utility-first CSS framework for responsive design",
    ],
    links: [
      {
        label: "GitHub",
        icon: <FaGithub />,
        url: "https://github.com/sujon-258549/aboul-khair.git",
      },
      {
        label: "Server",
        icon: <IoServerSharp />,
        url: "#",
      },
      {
        label: "Live",
        icon: <FiExternalLink />,
        url: "https://aboul-khair.vercel.app",
      },
    ],
  },
];

export function Project() {
  return (
    <section
      id="projects"
      className="py-6 md:py-12 lg:pb-20 lg:pt-[105px] px-4 mx-auto max-w-7xl"
    >
      <div className="w-full">
        <div className="text-center pb-7 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              My Project
            </span>
          </h2>
          <div className="max-w-[80%] md:max-w-[500px] h-1 bg-gradient-to-r from-emerald-400/0 via-emerald-400/70 to-emerald-400/0 mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <div className="w-full sm:w-[45%] rounded-sm lg:w-[31%]" key={index} style={{ boxShadow: "1px 1px 20px" }}>


              <div

                className="relative group isolate overflow-hidden h-[580px] rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-500"
              >
                {/* Floating gradient bubbles background */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -right-20 -top-20 w-64 h-96  rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
                  <div className="absolute -left-20 -bottom-20 w-64 h-96  rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delay"></div>
                </div>

                {/* Card content */}
                <div className="relative z-10 h-full flex flex-col  backdrop-blur-sm p-6 border border-gray-700/50">
                  {/* Unique header with animated icon */}
                  <div className="flex items-center mb-4 gap-3">
                    <div className="relative">
                      <div className="absolute inset-0  bg-white rounded-lg animate-pulse opacity-20"></div>
                      <span className="relative bg-white text-gray-900 px-1 py-1 rounded-lg font-bold text-lg flex items-center justify-center w-8 h-8">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />
                          <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
                          <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z" />
                        </svg>
                      </span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">
                        {project?.title.slice(0, 15)}
                      </h2>
                    </div>
                  </div>

                  {/* Description with animated underline */}
                  <p className="text-gray-300 mb-6 relative after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-500 group-hover:after:w-full">
                    {project?.description?.slice(0, 60)}....
                  </p>

                  {/* Image with 3D tilt effect */}
                  <div className="relative mb-6">
                    <div className=" rounded-xl overflow-hidden border border-gray-700/50 shadow-lg">
                      <img
                        style={{
                          width: "100%",
                          height: "350px",
                          objectFit: "cover",
                        }}
                        src={project?.image}
                        alt="Meal Box Dashboard"
                        className="w-full h-full transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>

                  {/* Action buttons with gradient hover */}
                  <div className="flex justify-between items-center mt-auto">
                    <div className="flex gap-4">
                      <a
                        href={project.links[0].url}
                        className="hover:text-gray-400 border text-cyan-300 transition-colors duration-300 p-2 rounded-full hover:bg-gray-700/50"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.links[1].url}
                        className="hover:text-gray-400 border text-blue-300 transition-colors duration-300 p-2 rounded-full hover:bg-gray-700/50"
                      >
                        <Database className="w-5 h-5" />
                      </a>
                      <a
                        href={project.links[2].url}
                        className="hover:text-gray-400 border text-green-300 transition-colors duration-300 p-2 rounded-full hover:bg-gray-700/50"
                      >
                        <Target className="w-5 h-5" />
                      </a>
                    </div>
                    <button>
                      <Details project={project} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
