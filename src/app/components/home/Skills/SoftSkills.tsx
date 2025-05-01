"use client";

import { motion } from "framer-motion";
import {
  FaUsers,
  FaLightbulb,
  FaComments,
  FaHandshake,
  FaClock,
  FaBalanceScale
} from "react-icons/fa";

const softSkills = [
  {
    title: "Team Collaboration",
    description: "Proven ability to work effectively in team environments, fostering positive relationships and achieving common goals.",
    icon: <FaUsers className="text-blue-400 text-3xl" />,
    color: "from-blue-500/20 to-blue-600/30",
    borderColor: "border-blue-400/30"
  },
  {
    title: "Creative Problem Solving",
    description: "Innovative approach to challenges, finding unique solutions to complex problems.",
    icon: <FaLightbulb className="text-yellow-400 text-3xl" />,
    color: "from-yellow-500/20 to-yellow-600/30",
    borderColor: "border-yellow-400/30"
  },
  {
    title: "Effective Communication",
    description: "Clear articulation of ideas both verbally and in writing, ensuring smooth project coordination.",
    icon: <FaComments className="text-green-400 text-3xl" />,
    color: "from-green-500/20 to-green-600/30",
    borderColor: "border-green-400/30"
  },
  {
    title: "Client Relations",
    description: "Strong ability to understand client needs and maintain productive professional relationships.",
    icon: <FaHandshake className="text-purple-400 text-3xl" />,
    color: "from-purple-500/20 to-purple-600/30",
    borderColor: "border-purple-400/30"
  },
  {
    title: "Time Management",
    description: "Excellent organizational skills with ability to prioritize tasks and meet deadlines consistently.",
    icon: <FaClock className="text-red-400 text-3xl" />,
    color: "from-red-500/20 to-red-600/30",
    borderColor: "border-red-400/30"
  },
  {
    title: "Adaptability",
    description: "Quick to learn new technologies and adjust to changing project requirements.",
    icon: <FaBalanceScale className="text-teal-400 text-3xl" />,
    color: "from-teal-500/20 to-teal-600/30",
    borderColor: "border-teal-400/30"
  }
];

const SoftSkills = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {softSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                boxShadow: "0 15px 30px -5px rgba(16, 185, 129, 0.2)",
              }}
              className={`bg-gradient-to-br ${skill.color} p-6 rounded-xl border ${skill.borderColor} backdrop-blur-sm transition-all duration-300 hover:shadow-lg`}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg bg-white/10 flex-shrink-0 border ${skill.borderColor}`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {skill.title}
                  </h3>
                </div>
                <p className="text-gray-300 flex-grow">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;