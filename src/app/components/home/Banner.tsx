import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  // Function to handle CV download
  const handleDownload = () => {
    const cvUrl = "/cv/sujon-cv.pdf"; // Replace with the actual path to your CV file
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download =
      "https://drive.google.com/file/d/127Wkem3CgpQG2eb7PhJqMrSSF7lryNbG/view?usp=sharing"; // Rename file when downloading
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div className="px-5 py-8 md:py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white lg:text-5xl">
                Hi, I,m <span className="uppercase text-customSion">sujon</span>
              </h1>
              <h1 className="text-2xl font-semibold text-customSion pt-5 lg:text-3xl">
                <Typewriter
                  words={[
                    "Frontend Developer",
                    "Backend Developer",
                    "MERN Stack Developer",
                    "Web Developer",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={50}
                  deleteSpeed={40}
                  delaySpeed={1000}
                />
              </h1>

              <p className="mt-3 text-gray-600 dark:text-gray-400">
                I am a passionate and dedicated MERN Stack Developer with a
                strong foundation in both frontend and backend development. I
                specialize in building scalable, efficient, and user-friendly
                web applications using modern technologies like React.js,
                Next.js, TypeScript, Redux, Node.js, Express.js, MongoDB, and
                Mongoose. With expertise in state management and database
                modeling, I ensure that applications are not only interactive
                and responsive but also well-structured and optimized for
                performance. My goal is to craft seamless digital experiences
                with clean, maintainable, and performance-optimized code.
              </p>

              {/* Download CV Button with onClick */}
              <button
                onClick={handleDownload}
                className="w-full px-5 py-2.5 mt-6 tracking-wider text-[16px] font-medium bg-customSion text-white uppercase transition-colors duration-300 transform rounded-lg lg:w-auto focus:outline-none hover:bg-transparent border border-customSion"
              >
                Download CV
              </button>
            </div>
          </div>
          <div className="flex items-center  relative justify-center w-full mt-10 md:mt-32 lg:mt-0 lg:w-1/2 h-[400px]">
            <Image
              width={400}
              height={250}
              src="/sujon-banner.png"
              alt="Catalogue-pana.svg"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
