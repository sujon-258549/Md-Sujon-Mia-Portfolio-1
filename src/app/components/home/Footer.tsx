import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
} from "react-icons/fa";
import { Facebook, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <section className="md:mt-0 mt-10" >
      <div className="text-center py-6">
        <footer className="flex flex-col lg:flex-row items-center lg:justify-between space-y-10 lg:space-y-0 justify-center m-10">
          <Image
            width={150}
            height={150}
            className=" mx-auto lg:mx-0"
            src="/sujon.png"
            alt="Logos"
          />
          <div className="flex gap-4 justify-center">
            {[
              { icon: Linkedin, color: "text-blue-400", bg: "bg-blue-500/10", link: "https://www.linkedin.com/in/sujon25" },
              { icon: Github, color: "text-gray-300", bg: "bg-gray-500/10", link: "https://github.com/sujon-258549" },
              { icon: Facebook, color: "text-blue-300", bg: "bg-blue-400/10", link: "https://www.facebook.com/md.sujon.mia.sujon.248980" },
              { icon: FaWhatsapp, color: "text-blue-300", bg: "bg-blue-400/10", link: "https://drive.google.com/file/d/1gy5BGduwOOvPDGRWfZ8WXR0NHgdQyUSK/view?usp=sharing" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 ${social.bg} rounded-xl border border-gray-800 hover:border-${social.color.split('-')[1]}-400/30 transition-all`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className={`w-6 h-6 ${social.color}`} strokeWidth={1.5} />
              </motion.a>
            ))}
          </div>
          <p className="text-center font-medium text-white">
            &copy; 2025 Portfolio Website. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
