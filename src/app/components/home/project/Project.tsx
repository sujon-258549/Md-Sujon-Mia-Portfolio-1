"use client";
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { IoServerSharp } from "react-icons/io5";
import './h.css'
import './s.css'

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
    id: '01',
    title: "Meal Box",
    description: "Meal Box is a convenient meal subscription platform designed to deliver fresh, chef-prepared meals directly to customers' doorsteps. Built with React, Node.js, and MongoDB, this full-stack application offers a seamless user experience with features like customizable meal plans, secure payments, and real-time order tracking",
    image: "https://i.ibb.co.com/Vpx2Z0RZ/screencapture-meal-box-team-client-vercel-app-dashboard-2025-05-01-14-52-41.png",
    keyFeatures: [
      "User-friendly dashboard for meal selection",
      "Secure checkout with Stripe integration",
      "Admin panel for restaurant partners",
      "Responsive design for all devices"
    ],
    techStack: [
      "React.js, Next.js, Tailwind CSS",
      "Node.js, Express.js",
      "MongoDB",
      "Firebase & JWT",
      "Stripe API"
    ],
    links: [
      {
        label: "GitHub",
        icon: <FaGithub />,
        url: "https://github.com/your-repo",
      },
      {
        label: "Server",
        icon: <IoServerSharp />,
        url: "https://github.com/your-server-repo",
      },
      {
        label: "Live",
        icon: <FiExternalLink />,
        url: "https://your-live-site.com",
      },
    ],
  },
  {
    id: '01',
    title: "Meal Box",
    description: "Meal Box is a convenient meal subscription platform designed to deliver fresh, chef-prepared meals directly to customers' doorsteps. Built with React, Node.js, and MongoDB, this full-stack application offers a seamless user experience with features like customizable meal plans, secure payments, and real-time order tracking",
    image: "https://i.ibb.co.com/Vpx2Z0RZ/screencapture-meal-box-team-client-vercel-app-dashboard-2025-05-01-14-52-41.png",
    keyFeatures: [
      "User-friendly dashboard for meal selection",
      "Secure checkout with Stripe integration",
      "Admin panel for restaurant partners",
      "Responsive design for all devices"
    ],
    techStack: [
      "React.js, Next.js, Tailwind CSS",
      "Node.js, Express.js",
      "MongoDB",
      "Firebase & JWT",
      "Stripe API"
    ],
    links: [
      {
        label: "GitHub",
        icon: <FaGithub />,
        url: "https://github.com/your-repo",
      },
      {
        label: "Server",
        icon: <IoServerSharp />,
        url: "https://github.com/your-server-repo",
      },
      {
        label: "Live",
        icon: <FiExternalLink />,
        url: "https://your-live-site.com",
      },
    ],
  },
  {
    id: '01',
    title: "Meal Box",
    description: "Meal Box is a convenient meal subscription platform designed to deliver fresh, chef-prepared meals directly to customers' doorsteps. Built with React, Node.js, and MongoDB, this full-stack application offers a seamless user experience with features like customizable meal plans, secure payments, and real-time order tracking",
    image: "https://i.ibb.co.com/Vpx2Z0RZ/screencapture-meal-box-team-client-vercel-app-dashboard-2025-05-01-14-52-41.png",
    keyFeatures: [
      "User-friendly dashboard for meal selection",
      "Secure checkout with Stripe integration",
      "Admin panel for restaurant partners",
      "Responsive design for all devices"
    ],
    techStack: [
      "React.js, Next.js, Tailwind CSS",
      "Node.js, Express.js",
      "MongoDB",
      "Firebase & JWT",
      "Stripe API"
    ],
    links: [
      {
        label: "GitHub",
        icon: <FaGithub />,
        url: "https://github.com/your-repo",
      },
      {
        label: "Server",
        icon: <IoServerSharp />,
        url: "https://github.com/your-server-repo",
      },
      {
        label: "Live",
        icon: <FiExternalLink />,
        url: "https://your-live-site.com",
      },
    ],
  },


];


export function Project() {
  return (
    <section id="projects" className="py-6 md:py-12 lg:py-20 px-4 mx-auto max-w-7xl">
      <div className="w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              My Project
            </span>
          </h2>
          <div className="max-w-[80%] md:max-w-[500px] h-1 bg-gradient-to-r from-emerald-400/0 via-emerald-400/70 to-emerald-400/0 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              style={{ boxShadow: '1px 1px 20px' }}
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
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />
                        <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
                        <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z" />
                      </svg>
                    </span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{project.title}</h2>

                  </div>
                </div>

                {/* Description with animated underline */}
                <p className="text-gray-300 mb-6 relative after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-500 group-hover:after:w-full">
                  {project.description.slice(0, 60)}....
                </p>

                {/* Image with 3D tilt effect */}
                <div className="relative mb-6">

                  <div className=" rounded-xl overflow-hidden border border-gray-700/50 shadow-lg">
                    <img style={{ width: '100%', height: '350px', objectFit: 'cover' }}
                      src="https://i.ibb.co.com/Vpx2Z0RZ/screencapture-meal-box-team-client-vercel-app-dashboard-2025-05-01-14-52-41.png"
                      alt="Meal Box Dashboard"
                      className="w-full h-full transition-transform duration-500 group-hover:scale-[1.02]"

                    />
                  </div>
                </div>



                {/* Action buttons with gradient hover */}
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex gap-4">
                    <a href="#" className="hover:text-gray-400 border text-cyan-300 transition-colors duration-300 p-2 rounded-full hover:bg-gray-700/50">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="hover:text-gray-400 border text-blue-300 transition-colors duration-300 p-2 rounded-full hover:bg-gray-700/50">
                      <Database className="w-5 h-5" />
                    </a>
                    <a href="#" className="hover:text-gray-400 border text-green-300 transition-colors duration-300 p-2 rounded-full hover:bg-gray-700/50">
                      <Target className="w-5 h-5" />
                    </a>
                  </div>
                  <button ><Details project={project} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}