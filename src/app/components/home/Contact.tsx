import "./contact.css";
import { motion } from "framer-motion";
import {
  GitFork,
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Facebook,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
const Contact = () => {
  return (
    <div className=" md:pb-20">
      <div className="text-center mb-12 md:mt-7 md:mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
            My Contact
          </span>
        </h2>
        <div className="max-w-[80%] md:max-w-[500px] h-1 bg-gradient-to-r from-emerald-400/0 via-emerald-400/70 to-emerald-400/0 mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:gap-5  gap-10 lg:gap-10 md:grid-cols-2">
        <div className="gap-5 md:gap-10 ">
          <div className="">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
              <motion.div
                className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 filter blur-3xl"
                animate={{
                  x: [0, 50, 0],
                  y: [0, -30, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-purple-500 filter blur-3xl"
                animate={{
                  x: [0, -40, 0],
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
              {/* Section Header with animated icon */}
              <div className="">
                {/* Creative Contact Cards */}
                <h2 className="text-3xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  Let,s Connect
                </h2>
                <div className="max-w-md h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto" />
                <p className="my-4 text-gray-300 max-w-2xl mx-auto text-lg">
                  Ready to collaborate or just want to say hi? My digital door
                  is always open.
                </p>
                <div className="space-y-8">
                  <motion.div
                    className="p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-blue-400/30 transition-all"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start gap-5">
                      <div className="relative">
                        <div className="absolute -inset-2 bg-blue-500/10 rounded-lg blur-sm" />
                        <Mail
                          className="relative w-8 h-8 text-blue-400"
                          strokeWidth={1.5}
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                          Email
                          <GitFork className="w-4 h-4 text-purple-400" />
                        </h3>
                        <a
                          href="mailto:hello@example.com"
                          className="text-gray-300 hover:text-blue-400 transition-colors group"
                        >
                          sujon258549@gmail.com
                          <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                            <Send className="w-4 h-4 inline" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-purple-400/30 transition-all"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start gap-5">
                      <div className="relative">
                        <div className="absolute -inset-2 bg-purple-500/10 rounded-lg blur-sm" />
                        <Phone
                          className="relative w-8 h-8 text-purple-400"
                          strokeWidth={1.5}
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                          Phone
                          <svg
                            className="w-4 h-4 text-blue-400"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </h3>
                        <a
                          href="tel:+1234567890"
                          className="text-gray-300 hover:text-purple-400 transition-colors group"
                        >
                          +8801516532597 || +8801790876529
                          <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                            <Send className="w-4 h-4 inline" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-green-400/30 transition-all"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start gap-5">
                      <div className="relative">
                        <div className="absolute -inset-2 bg-green-500/10 rounded-lg blur-sm" />
                        <MapPin
                          className="relative w-8 h-8 text-green-400"
                          strokeWidth={1.5}
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                          Location
                          <svg
                            className="w-4 h-4 text-blue-400"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12 2a8 8 0 0 1 8 8c0 6-8 14-8 14S4 16 4 10a8 8 0 0 1 8-8"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </h3>
                        <p className="text-gray-300">Rangpur city Bangladesh</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Animated Social Links */}
                  <div className="pt-6">
                    <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                      <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Digital Pathways
                      </span>
                      <svg
                        className="w-5 h-5 text-gray-400"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M7 7h10M7 12h10M7 17h10"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </h3>
                    <div className="flex gap-4">
                      {[
                        {
                          icon: Linkedin,
                          color: "text-blue-400",
                          bg: "bg-blue-500/10",
                          link: "https://www.linkedin.com/in/sujon25",
                        },
                        {
                          icon: Github,
                          color: "text-gray-300",
                          bg: "bg-gray-500/10",
                          link: "https://github.com/sujon-258549",
                        },
                        {
                          icon: Facebook,
                          color: "text-blue-300",
                          bg: "bg-blue-400/10",
                          link: "https://www.facebook.com/md.sujon.mia.sujon.248980",
                        },
                        {
                          icon: FaWhatsapp,
                          color: "text-blue-300",
                          bg: "bg-blue-400/10",
                          link: "https://drive.google.com/file/d/1gy5BGduwOOvPDGRWfZ8WXR0NHgdQyUSK/view?usp=sharing",
                        },
                      ].map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-4 ${
                            social.bg
                          } rounded-xl border border-gray-800 hover:border-${
                            social.color.split("-")[1]
                          }-400/30 transition-all`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <social.icon
                            className={`w-6 h-6 ${social.color}`}
                            strokeWidth={1.5}
                          />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form
          style={{ boxShadow: "1px 1px 30px #00ADB5" }}
          className="px-8 py-10 rounded-md"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
            Contact From
          </h2>
          <div>
            <div className="formContainer mt-5">
              <input placeholder="Enter Your Name" type="text" />
              <label>Name</label>
            </div>
            <div className="formContainer mt-5">
              <input placeholder="Enter your email" type="text" />
              <label>Email</label>
            </div>
            <div className="formContainer mt-5">
              <input placeholder="Enter your mobil/phone" type="text" />
              <label>Phone</label>
            </div>
            <div className="formContainer mt-5">
              <textarea
                id="message"
                rows={5}
                style={{
                  fontFamily: "Basier Square",
                  border: "2px solid rgb(85, 85, 85)",
                }}
                className="block p-2.5 w-full text-[18px] text-gray-900  rounded-lg  focus:ring-blue-500 focus:border-blue-500 dark:bg-customBg dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white-500 dark:focus:border-customBg"
                placeholder="Write your thoughts here..."
                defaultValue={""}
              />
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your message
              </label>
            </div>
            <button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold px-8 py-3 mt-5 rounded-lg hover:scale-105 transition-all duration-300  gap-2 shadow-lg hover:shadow-emerald-500/30 w-full text-center">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
