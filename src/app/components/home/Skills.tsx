"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaFigma,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiTypescript,
  SiExpress,
  SiJsonwebtokens,
  SiMongoosedotws,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "React.js", icon: <FaReact className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
  { name: "JWT", icon: <SiJsonwebtokens className="text-red-500" /> },
  { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "HTML", icon: <FaHtml5 className="text-red-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
  { name: "Mongoose", icon: <SiMongoosedotws className="text-pink-500" /> },
];

const Skills = () => {
  return (
    <div className="  text-white px-5">
      <div className="text-center mb-8 md:mb-16">
        <h1
          className="
            text-3xl text-white font-bold  md:text-5xl text-center "
        >
          Our Skills
        </h1>
      </div>

      {/* Skill Cards Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            style={{ boxShadow: "3px 3px 3px #00adb5" }}
            key={index}
            className="flex flex-col  items-center justify-center p-4 bg-gray-800 rounded-xl shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <p className="text-lg font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
