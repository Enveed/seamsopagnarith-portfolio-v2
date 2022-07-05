import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full text-center py-12 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        viewport={{ once: true }}
        className="max-w-[900px] w-full mx-auto p-6 text-left sm:p-16"
      >
        <h2 className="text-2xl text-[#ccd6f6] w-100% sm:mb-8 after:content-[''] after:h-[1px] w-full md:after:w-[200px] lg:after:w-[300px] after:bg-[#233554] after:block after:relative after:top-[-15px] after:ml-[175px]">
          <span className="text-[#64ffda] font-mono">02.</span> About Me
        </h2>
        <div className="flex flex-wrap justify-between">
          <div className="w-[100%] md:w-[65%] pr-0 py-12 md:pr-12 sm:py-0">
            <p className="mb-4">
              Hello! My name is Sopagnarith and I enjoy learning as well as
              developing new things. I started out my career path in Cyber
              Security back in 2019, in which I&apos;ve had many opportunities
              to be responsible for many cyber security tasks at{" "}
              <Link href="https://kit.edu.kh">
                <a
                  target="_blank"
                  className="inline-block text-[#64ffda] after:block after:h-[1px] after:w-0 after:bg-[#64ffda] hover:after:w-full after:transition-all after:duration-300"
                >
                  Kirirom Institute of Technology
                </a>
              </Link>
              .
            </p>
            <p className="my-4">
              However, towards the end of 2021, I&apos;ve unknowingly managed to
              discover my profound interest for Web Development, which heavily
              influenced my decision in making a major career shift towards Web
              Development.
            </p>
            <p className="my-4">
              Despite being my first actual intensive year in the field,
              I&apos;ve had the privilege of working under multiple
              professional-setting projects such as: a job portal app, a covid
              traveling app, a chat app with grammar correction and most
              importantly, I&apos;ve managed to acquire professional working
              experience under{" "}
              <Link href="https://skyasianetwork.com">
                <a
                  target="_blank"
                  className="inline-block text-[#64ffda] after:block after:h-[1px] after:w-0 after:bg-[#64ffda] hover:after:w-full after:transition-all after:duration-300"
                >
                  a start-up company
                </a>
              </Link>
              .
            </p>
            <p className="my-4">
              Here are a few technologies I’ve been working with recently:
            </p>
            <ul className="grid grid-cols-skill-grid gap-2 overflow-hidden font-mono">
              <li className="relative pl-4 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda]">
                NextJS
              </li>
              <li className="relative pl-4 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda]">
                NodeJS
              </li>
              <li className="relative pl-4 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda]">
                FastAPI
              </li>
              <li className="relative pl-4 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda]">
                Wordpress
              </li>
              <li className="relative pl-4 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda]">
                Linux
              </li>
              <li className="relative pl-4 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda]">
                NestJS
              </li>
            </ul>
          </div>
          <div className="w-[100%] md:w-[35%] py-12 md:py-0">
            <Image
              src="https://i.ibb.co/Th9G5BR/enveed-1.png"
              alt="seam-sopagnarith"
              className="rounded-sm"
              layout="responsive"
              width="500"
              height="500"
            ></Image>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
