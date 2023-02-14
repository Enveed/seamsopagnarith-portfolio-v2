import React from "react";
import { AiOutlineFolder } from "react-icons/ai";
import { motion } from "framer-motion";
import Link from "next/link";

export const Project = () => {
  return (
    <div id="project" className="w-full text-left py-12">
      <div className="max-w-[1000px] w-full h-full mx-auto p-6 sm:p-16 lg:p-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="text-2xl text-[#ccd6f6] mb-8 after:content-[''] after:h-[1px] w-full md:after:w-[200px] lg:after:w-[300px] after:bg-[#233554] after:block after:relative after:top-[-15px] after:ml-[325px]"
        >
          <span className="text-[#64ffda] font-mono">04.</span> Things I&apos;ve
          Worked On
        </motion.h2>
        <div className="grid gap-4 pt-8 text-sm grid-cols-project-grid md:grid-cols-project-grid-md">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { delay: 2 } }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            className="flex group justify-between flex-col bg-[#112240] shadow-2xl p-6 rounded-md cursor-pointer group"
          >
            <Link href="https://play.google.com/store/apps/details?id=com.jobifycambodia">
              <a target="_blank">
                <main>
                  <div className="pb-4">
                    <AiOutlineFolder size={50} className="fill-[#64ffda]" />
                  </div>
                  <h3 className="text-[#ccd6f6] group-hover:text-[#64ffda] text-lg pb-2">
                    Jobify Mobile App
                  </h3>
                  <p className="text-[#a8b2d1] pb-2">
                    A job matching platform to improve the livelihood of IT
                    workers in Cambodia.
                  </p>
                </main>
                <footer>
                  <ul className="flex space-x-4 text-xs py-2 font-mono text-[#8892b0]">
                    <li>React Native</li>
                    <li>ExpressJS</li>
                    <li>AWS</li>
                    <li>FastAPI</li>
                  </ul>
                </footer>
              </a>
            </Link>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { delay: 2.1 } }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            className="flex group justify-between flex-col bg-[#112240] shadow-2xl p-6 rounded-md cursor-pointer group"
          >
            <Link href="https://jobify.works">
              <a target="_blank">
                <main>
                  <div className="pb-4">
                    <AiOutlineFolder size={50} className="fill-[#64ffda]" />
                  </div>
                  <h3 className="text-[#ccd6f6] group-hover:text-[#64ffda] text-lg pb-2">
                    Jobify Web App
                  </h3>
                  <p className="text-[#a8b2d1] pb-2">
                    A job matching platform to improve the livelihood of IT
                    workers in Cambodia.
                  </p>
                </main>
                <footer>
                  <ul className="flex space-x-4 text-xs py-2 font-mono text-[#8892b0]">
                    <li>NuxtJS</li>
                    <li>ExpressJS</li>
                    <li>AWS</li>
                    <li>FastAPI</li>
                  </ul>
                </footer>
              </a>
            </Link>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { delay: 2.2 } }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            className="flex group justify-between flex-col bg-[#112240] shadow-2xl p-6 rounded-md cursor-pointer group"
          >
            <Link href="https://enveed-camp.onrender.com">
              <a target="_blank">
                <main>
                  <div className="pb-4">
                    <AiOutlineFolder size={50} className="fill-[#64ffda]" />
                  </div>
                  <h3 className="text-[#ccd6f6] group-hover:text-[#64ffda] text-lg pb-2">
                    RithCamp
                  </h3>
                  <p className="text-[#a8b2d1] pb-2">
                    A simple camping website, built to demonstrate the usage of
                    Express, MongoDB and EJS.
                  </p>
                </main>
                <footer>
                  <ul className="flex space-x-4 text-xs py-2 font-mono text-[#8892b0]">
                    <li>ExpressJS</li>
                    <li>MongoDB</li>
                    <li>EJS</li>
                    <li>Cloudinary</li>
                  </ul>
                </footer>
              </a>
            </Link>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { delay: 2.3 } }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            className="flex group justify-between flex-col bg-[#112240] shadow-2xl p-6 rounded-md cursor-pointer group"
          >
            <Link href="/">
              <a>
                <div className="flex h-full justify-between flex-col">
                  <main>
                    <div className="pb-4">
                      <AiOutlineFolder size={50} className="fill-[#64ffda]" />
                    </div>
                    <h3 className="text-[#ccd6f6] group-hover:text-[#64ffda] text-lg pb-2">
                      Portfolio Website V2
                    </h3>
                    <p className="text-[#a8b2d1] pb-2">
                      Second iteration of my portfolio website that I built with
                      Next.js and hosted on Heroku
                    </p>
                  </main>
                  <footer>
                    <ul className="flex space-x-4 text-xs py-2 font-mono text-[#8892b0]">
                      <li>NextJS</li>
                      <li>Tailwind CSS</li>
                      <li>Framer Motion</li>
                    </ul>
                  </footer>
                </div>
              </a>
            </Link>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { delay: 2.4 } }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            className="flex group justify-between flex-col bg-[#112240] shadow-2xl p-6 rounded-md cursor-pointer group"
          >
            <main>
              <div className="pb-4">
                <AiOutlineFolder size={50} className="fill-[#64ffda]" />
              </div>
              <h3 className="text-[#ccd6f6] group-hover:text-[#64ffda] text-lg pb-2">
                Chat App with Grammar Correction
              </h3>
              <p className="text-[#a8b2d1] pb-2">
                Building a peer-to-peer chat app with Grammar Correction
              </p>
            </main>
            <footer>
              <ul className="flex space-x-4 text-xs py-2 font-mono text-[#8892b0]">
                <li>GunJS</li>
                <li>FastAPI</li>
                <li>T5 Model</li>
              </ul>
            </footer>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { delay: 2.5 } }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            className="flex group justify-between flex-col bg-[#112240] shadow-2xl p-6 rounded-md cursor-pointer group"
          >
            <Link href="https://pagnarithseam18.github.io">
              <a target="_blank">
                <div className="flex h-full justify-between flex-col">
                  <main>
                    <div className="pb-4">
                      <AiOutlineFolder size={50} className="fill-[#64ffda]" />
                    </div>
                    <h3 className="text-[#ccd6f6] group-hover:text-[#64ffda] text-lg pb-2">
                      Portfolio Website V1
                    </h3>
                    <p className="text-[#a8b2d1] pb-2">
                      My first portfolio website that I built in 2019 with pure
                      HTML, CSS and JS and hosted on GitHub Pages.
                    </p>
                  </main>
                  <footer>
                    <ul className="flex space-x-4 text-xs py-2 font-mono text-[#8892b0]">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                    </ul>
                  </footer>
                </div>
              </a>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Project;
