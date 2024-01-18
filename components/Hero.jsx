import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="hero" className="w-full pt-20 xs:pt-0 xs:h-screen">
      <div className="max-w-[1100px] w-full h-full mx-auto p-6 flex flex-col justify-center space-y-4 text-left md:space-y-8 sm:p-16">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.65 }}
          viewport={{ once: true }}
          className="font-normal text-xl text-[#64ffda] font-mono"
        >
          Hi, my name is
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8 }}
          viewport={{ once: true }}
          className="text-4xl text-[#ccd6f6] md:text-6xl font-sans"
        >
          Sopagnarith SEAM.
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.95 }}
          viewport={{ once: true }}
          className="text-4xl text-[#a8b2d1] md:text-6xl font-sans"
        >
          I build things for the web.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.1 }}
          viewport={{ once: true }}
          className="max-w-lg font-sans"
        >
          Enthusiastic and detail-oriented Software Engineer with a passion for
          creating responsive and user-friendly web applications. Proficient in
          modern frontend technologies, with a strong foundation in React. Adept
          at working with different technologies to deliver high-quality
          solutions.
        </motion.p>
        <Link href="#contact">
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.25 }}
            viewport={{ once: true }}
            className="font-mono inline-block p-4 shadow-xl rounded-md w-40 border border-[#64ffda] text-[#64ffda] hover:bg-[rgba(100,255,218,0.1)] duration-300 text-center cursor-pointer"
          >
            Contact Me
          </motion.a>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
