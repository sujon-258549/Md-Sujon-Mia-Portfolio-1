import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
    const educationData = [
        {
            id: 1,
            degree: "Diploma in Computer Engineering",
            institution: "Kurigram Polytechnic Institute",
            duration: "2019 - 2023",
            result: "CGPA: 3.23 / 4.00",
            description: "4-year technical diploma with a focus on programming, networking, and hardware fundamentals.",
            icon: <FaGraduationCap className="text-white text-2xl" />,
        },
    ];

    return (
        <section id="education" className="py-16 text-white transition-all">
            <div className="container mx-auto px-4">
                {/* Section Header with Gradient Text */}
                <div className="text-center mb-6 md:mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                        <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                            My Education
                        </span>
                    </h2>
                    <div className="max-w-[80%] md:max-w-[500px] h-1 bg-gradient-to-r from-emerald-400/0 via-emerald-400/70 to-emerald-400/0 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 pt-5 md:pt-3 lg:pt-8 md:grid-cols-2 gap-10 items-center">
                    {/* Illustration */}
                    <div className="flex justify-center relative group">
                        <div className="absolute -inset-3 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition-all -z-10"></div>
                        <img
                            src="/e.png"
                            alt="Education Illustration"
                            className="w-full max-w-md rounded-xl shadow-2xl border-4 border-emerald-400/100 group-hover:border-emerald-400/150 transition-all"
                        />
                    </div>

                    {/* Education Card */}
                    {educationData.map((edu) => (
                        <div
                            key={edu.id}
                            className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-xl border-l-8 border-emerald-500 hover:scale-[1.02] transition-all group overflow-hidden"
                        >
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                            
                            {/* Icon */}
                            <div className="absolute -top-6 -left-6 bg-gradient-to-br from-emerald-500 to-teal-600 p-4 rounded-full shadow-lg">
                                {edu.icon}
                            </div>
                            
                            {/* Content */}
                            <h3 className="text-2xl font-bold text-white mb-1">{edu.degree}</h3>
                            <p className="text-lg font-medium text-emerald-300">
                                {edu.institution}
                            </p>

                            {/* Badges */}
                            <div className="flex flex-wrap gap-3 mt-4">
                                <span className="bg-emerald-900/50 text-emerald-300 px-3 py-1 rounded-full text-sm font-semibold border border-emerald-400/30">
                                    {edu.duration}
                                </span>
                                <span className="bg-cyan-900/50 text-cyan-300 px-3 py-1 rounded-full text-sm font-semibold border border-cyan-400/30">
                                    {edu.result}
                                </span>
                            </div>

                            <p className="mt-4 text-gray-300 leading-relaxed">
                                {edu.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;