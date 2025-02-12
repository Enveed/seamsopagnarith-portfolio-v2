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
                    Insurance Selling Platform
                  </h3>
                  <p className="text-[#a8b2d1] pb-2">
                    A platform that aims to empower insurance agents in managing
                    policy applications and client interactions. This system
                    enables agents to quickly process insurance applications,
                    track their status, and deliver seamless customer service.
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
            <Link href="https://prueshop.prudential.com.kh/pmli/lead">
              <a target="_blank">
                <main>
                  <div className="pb-4">
                    <AiOutlineFolder size={50} className="fill-[#64ffda]" />
                  </div>
                  <h3 className="text-[#ccd6f6] group-hover:text-[#64ffda] text-lg pb-2">
                    Client Tracking Platform
                  </h3>
                  <p className="text-[#a8b2d1] pb-2">
                    A specialized solution designed to streamline the process of
                    capturing, tracking, nurturing, and converting leads into
                    loyal policyholders.
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
            <Link href="https://prueshop.prudential.com.kh/sale-portal/">
              <a target="_blank">
                <main>
                  <div className="pb-4">
                    <AiOutlineFolder size={50} className="fill-[#64ffda]" />
                  </div>
                  <h3 className="text-[#ccd6f6] group-hover:text-[#64ffda] text-lg pb-2">
                    Sale Portal
                  </h3>
                  <p className="text-[#a8b2d1] pb-2">
                    A data-driven focused platform that helps agents optimize
                    their strategies, close more deals, and achieve their sales
                    targets efficiently by providing deep insights into their
                    performance.
                  </p>
                </main>
                <footer>
                  <ul className="flex flex-wrap gap-x-4 text-xs py-2 font-mono text-[#8892b0]">
                    <li>C#(.NET)</li>
                    <li>MVC</li>
                    <li>Bootstrap</li>
                    <li>jQuery</li>
                    <li>SQL</li>
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
                    A gateway that allows customers to pay for their insurance
                    policy via Cambodia&apos;s most popular payment options,
                    reducing the risk of missed deadlines and policy lapses.
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
            <Link href="https://prueshop.prudential.com.kh/pv-form/">
              <a target="_blank">
                <main>
                  <div className="pb-4">
                    <AiOutlineFolder size={50} className="fill-[#64ffda]" />
                  </div>
                  <h3 className="text-[#ccd6f6] group-hover:text-[#64ffda] text-lg pb-2">
                    Agent Recruitment Portal
                  </h3>
                  <p className="text-[#a8b2d1] pb-2">
                    A user-friendly application that helps make the recruitment
                    process smooth and efficient for aspiring insurance agents.
                    The portal allows individuals to quickly submit their
                    applications and necessary documents without the hassle of
                    complicated procedures.
                  </p>
                </main>
                <footer>
                  <ul className="flex flex-wrap gap-x-4 text-xs py-2 font-mono text-[#8892b0]">
                    <li>ReactJS</li>
                    <li>MUI</li>
                    <li>C#(.NET)</li>
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
            <Link href="">
              <a target="">
                <main>
                  <div className="pb-4">
                    <AiOutlineFolder size={50} className="fill-[#64ffda]" />
                  </div>
                  <h3 className="text-[#ccd6f6] group-hover:text-[#64ffda] text-lg pb-2">
                    Agent Recruitment Admin Portal
                  </h3>
                  <p className="text-[#a8b2d1] pb-2">
                    An internal centralized portal designed to manage and
                    oversee all recruitment submissions for insurance agents.
                    This portal provides administrators with the tools they need
                    to review, track, and manage agent applications in a
                    streamlined and organized manner.
                  </p>
                </main>
                <footer>
                  <ul className="flex flex-wrap gap-x-4 text-xs py-2 font-mono text-[#8892b0]">
                    <li>ReactJS</li>
                    <li>MUI</li>
                    <li>C#(.NET)</li>
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
                    A mobile application that aims to empower job seekers by
                    providing personalized recommendations and efficient job
                    matching with the power of AI.
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
                    A job matching platform that acts as an intermediary between
                    job seekers and potential employers, easing the hiring
                    process for both parties.
                  </p>
                </main>
                <footer>
                  <ul className="flex flex-wrap gap-x-4 text-xs py-2 font-mono text-[#8892b0]">
                    <li>NuxtJS</li>
                    <li>VueX</li>
                    <li>ExpressJS</li>
                    <li>AWS</li>
                    <li>Nginx</li>
                    <li>GoDaddy</li>
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
                      Next.js and hosted on Netlify. This website aims to help
                      people understand more about my professional background.
                    </p>
                  </main>
                  <footer>
                    <ul className="flex flex-wrap gap-x-4 text-xs py-2 font-mono text-[#8892b0]">
                      <li>NextJS</li>
                      <li>Tailwind CSS</li>
                      <li>Framer Motion</li>
                      <li>Github</li>
                      <li>Netlify</li>
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
