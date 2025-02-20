import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaPhoneSquare,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <section className="md:mt-0 mt-10">
      <div className="text-center py-6">
        <footer className="flex flex-col space-y-10 justify-center m-10">
          <Image
            width={128}
            height={100}
            className=" mx-auto"
            src="/sujon.png"
            alt="Logos"
          />
          <div className="flex gap-2 justify-center">
            <a
              href="https://www.facebook.com/profile.php?id=100088142062918"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-customSion border border-customSion text-4xl font-bold rounded-full p-2" />
            </a>
            <a href="https://github.com/sujon-258549" aria-label="GitHub">
              <FaGithub className="text-customSion border border-customSion text-4xl font-bold rounded-full p-2" />
            </a>
            <a href="https://www.linkedin.com/in/sujon25" aria-label="LinkedIn">
              <FaLinkedinIn className="text-customSion border border-customSion text-4xl font-bold rounded-full p-2" />
            </a>
            <a href="mailto:sujon258549@gmail.com" aria-label="Email">
              <MdEmail className="text-customSion border border-customSion text-4xl font-bold rounded-full p-2" />
            </a>
            <a href="tel:01790876529" aria-label="Phone">
              <FaPhoneSquare className="text-customSion border border-customSion text-4xl font-bold rounded-full p-2" />
            </a>
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
