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
    <section className="py-16  px-5">
      <div className="mx-auto">
        {/* Section Header */}


        {/* Skill Cards Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-emerald-300/100 hover:border-emerald-400/100 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: index * 0.05 }}
              style={{ boxShadow: '8px 4px 10px rgb(52, 211, 153)' }}
              whileHover={{
                y: -8,
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.3)",
                borderColor: "#10B981",
              }}
            >
              <motion.div
                className="text-5xl mb-3"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {skill.icon}
              </motion.div>
              <motion.p
                className="text-lg text-white font-semibold text-center"
                whileHover={{ color: "#10B981" }}
              >
                {skill.name}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;