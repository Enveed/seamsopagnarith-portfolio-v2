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
            whileInView={{ y: 0, opacity: 1, transition: { delay: 1 } }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            className="flex group justify-between flex-col bg-[#112240] shadow-2xl p-6 rounded-md cursor-pointer group"
          >
            <Link href="https://prueshop.prudential.com.kh/eposweb">
              <a target="_blank">
                <main>
                  <div className="pb-4">
                    <AiOutlineFolder size={50} className="fill-[#64ffda]" />
                  </div>
                  <h3 className="text-[#ccd6f6] group-hover:text-[#64ffda] text-lg pb-2">
                    Insurance Selling Platform (Cambodia)
                  </h3>
                  <p className="text-[#a8b2d1] pb-2">
                    An insurance selling platform that help eases agents&apos;
                    bothersome process; by having everything packaged into a
                    single platform.
                  </p>
                </main>
                <footer>
                  <ul className="flex flex-wrap gap-x-4 text-xs py-2 font-mono text-[#8892b0]">
                    <li>ReactJS</li>
                    <li>MUI</li>
                    <li>Context</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>Kubernetes</li>
                    <li>Jenkins</li>
                  </ul>
                </footer>
              </a>
            </Link>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { delay: 1 } }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            className="flex group justify-between flex-col bg-[#112240] shadow-2xl p-6 rounded-md cursor-pointer group"
          >
            <Link href="https://prueshop.prudential.com.kh/pmli/eposweb">
              <a target="_blank">
                <main>
                  <div className="pb-4">
                    <AiOutlineFolder size={50} className="fill-[#64ffda]" />
                  </div>
                  <h3 className="text-[#ccd6f6] group-hover:text-[#64ffda] text-lg pb-2">
                    Insurance Selling Platform (Myanmar)
                  </h3>
                  <p className="text-[#a8b2d1] pb-2">
                    An insurance selling platform that help eases agents&apos;
                    bothersome process; by having everything packaged into a
                    single platform.
                  </p>
                </main>
                <footer>
                  <ul className="flex flex-wrap gap-x-4 text-xs py-2 font-mono text-[#8892b0]">
                    <li>ReactJS</li>
                    <li>MUI</li>
                    <li>Context</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>Kubernetes</li>
                    <li>Jenkins</li>
                  </ul>
                </footer>
              </a>
            </Link>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { delay: 1 } }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            className="flex group justify-between flex-col bg-[#112240] shadow-2xl p-6 rounded-md cursor-pointer group"
          >
            <Link href="https://prueshop.prudential.com.kh/lead">
              <a target="_blank">
                <main>
                  <div className="pb-4">
                    <AiOutlineFolder size={50} className="fill-[#64ffda]" />
                  </div>
                  <h3 className="text-[#ccd6f6] group-hover:text-[#64ffda] text-lg pb-2">
                    Client Tracking Platform (Cambodia)
                  </h3>
                  <p className="text-[#a8b2d1] pb-2">
                    An inhouse application for agents to keep track of potential
                    customers that may be converted into sales.
                  </p>
                </main>
                <footer>
                  <ul className="flex flex-wrap gap-x-4 text-xs py-2 font-mono text-[#8892b0]">
                    <li>ReactJS</li>
                    <li>MUI</li>
                    <li>Zustand</li>
                    <li>MongoDB</li>
                    <li>Kubernetes</li>
                    <li>Jenkins</li>
                  </ul>
                </footer>
              </a>
            </Link>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { delay: 1 } }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            className="flex group justify-between flex-col bg-[#112240] shadow-2xl p-6 rounded-md cursor-pointer group"
          >
            <Link href="https://prueshop.prudential.com.kh/pmli/lead">
              <a target="_blank">
                <main>
                  <div className="pb-4">
                    <AiOutlineFolder size={50} className="fill-[#64ffda]" />
                  </div>
                  <h3 className="text-[#ccd6f6] group-hover:text-[#64ffda] text-lg pb-2">
                    Client Tracking Platform (Myanmar)
                  </h3>
                  <p className="text-[#a8b2d1] pb-2">
                    An inhouse application for agents to keep track of potential
                    customers that may be converted into sales.
                  </p>
                </main>
                <footer>
                  <ul className="flex flex-wrap gap-x-4 text-xs py-2 font-mono text-[#8892b0]">
                    <li>ReactJS</li>
                    <li>MUI</li>
                    <li>Zustand</li>
                    <li>MongoDB</li>
                    <li>Kubernetes</li>
                    <li>Jenkins</li>
                  </ul>
                </footer>
              </a>
            </Link>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { delay: 1 } }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            className="flex group justify-between flex-col bg-[#112240] shadow-2xl p-6 rounded-md cursor-pointer group"
          >
            <Link href="https://prueshop.prudential.com.kh/billpayment/">
              <a target="_blank">
                <main>
                  <div className="pb-4">
                    <AiOutlineFolder size={50} className="fill-[#64ffda]" />
                  </div>
                  <h3 className="text-[#ccd6f6] group-hover:text-[#64ffda] text-lg pb-2">
                    Payment Link Generator
                  </h3>
                  <p className="text-[#a8b2d1] pb-2">
                    An app to generate payment link for customers to pay for
                    their insurance policies without the need of an agent.
                  </p>
                </main>
                <footer>
                  <ul className="flex flex-wrap gap-x-4 text-xs py-2 font-mono text-[#8892b0]">
                    <li>ReactJS</li>
                    <li>MUI</li>
                    <li>Context</li>
                    <li>C#(.NET)</li>
                    <li>Kubernetes</li>
                    <li>Jenkins</li>
                  </ul>
                </footer>
              </a>
            </Link>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { delay: 1 } }}
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
                  <ul className="flex flex-wrap gap-x-4 text-xs py-2 font-mono text-[#8892b0]">
                    <li>React-Native</li>
                    <li>NativeBase</li>
                    <li>Redux</li>
                    <li>Firebase</li>
                    <li>ExpressJS</li>
                    <li>FastAPI</li>
                  </ul>
                </footer>
              </a>
            </Link>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { delay: 1 } }}
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
                  <ul className="flex flex-wrap gap-x-4 text-xs py-2 font-mono text-[#8892b0]">
                    <li>NuxtJS</li>
                    <li>VueX</li>
                    <li>ExpressJS</li>
                    <li>AWS</li>
                  </ul>
                </footer>
              </a>
            </Link>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { delay: 1 } }}
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
                    <ul className="flex flex-wrap gap-x-4 text-xs py-2 font-mono text-[#8892b0]">
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
            whileInView={{ y: 0, opacity: 1, transition: { delay: 1 } }}
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
                  <ul className="flex flex-wrap gap-x-4 text-xs py-2 font-mono text-[#8892b0]">
                    <li>ExpressJS</li>
                    <li>MongoDB</li>
                    <li>EJS</li>
                    <li>Cloudinary</li>
                  </ul>
                </footer>
              </a>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Project;
