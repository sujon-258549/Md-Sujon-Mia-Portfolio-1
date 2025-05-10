import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <section className=" py-10 md:py-16 relative overflow-hidden text-white">
      <div className=" px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content - All text information */}
          <div className="w-full lg:w-1/2 space-y-6">
            {/* Designation */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-full inline-block shadow-lg">
              <span className="font-medium tracking-wide">
                Web Stack Developer
              </span>
            </div>

            {/* Name and Introduction */}
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Hi, I,m <span className="text-[#10B981] uppercase">Sujon</span>
            </h1>

            {/* Dynamic Roles */}
            <h2 className="text-xl md:text-2xl font-semibold text-yellow-300 min-h-[32px]">
              <Typewriter
                words={[
                  "Frontend Specialist",
                  "Backend Engineer",
                  "Full Stack Developer",
                  "Web Solutions Architect",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={40}
                delaySpeed={1000}
              />
            </h2>

            {/* About Me */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-lg">
              <h3 className="text-lg font-bold text-emerald-400 mb-2">
                About Me
              </h3>
              <p className="text-gray-200 leading-relaxed">
                I,m a passionate full-stack developer specializing in modern web
                technologies. With expertise in React.js, Node.js, Express, and
                MongoDB, I build clean, responsive, and high-performance
                applications. My focus is on creating maintainable code and
                exceptional user experiences.
              </p>
            </div>

            {/* Download CV Button with working functionality */}
            <div className="mt-5 md:mt-10">
              <a
                className=""
                href="https://drive.google.com/file/d/1TccrW7P7zTgqdf6EmwdB-lF2LwWOnUdJ/view?usp=sharing"
              >
                {" "}
                <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold px-8 py-6 rounded-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-emerald-500/30">
                  <FaDownload className="text-lg" />
                  <span>Download CV</span>
                </Button>
              </a>
            </div>
          </div>

          {/* Right Image with decorative elements */}
          <div className="w-full lg:w-1/2 flex justify-center relative">
            <div className="relative z-10 group">
              <div className="absolute -inset-3 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition-all duration-500 -z-10"></div>
              <Image
                width={400}
                height={400}
                src="/sujon-banner.png"
                alt="Sujon - Professional Web Developer"
                className="relative rounded-xl shadow-2xl border-4 border-emerald-400/100 group-hover:border-emerald-400/150 transition-all duration-500 transform group-hover:scale-105"
                priority
              />
              {/* Floating tech badges */}
            </div>

            {/* Animated background elements */}
            <div className="absolute w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse -z-10 top-0 right-0"></div>
            <div className="absolute w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse -z-10 bottom-0 left-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
