import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function Work() {
  const [activeTab, setActiveTab] = useState(1);
  const indicatorMovementMd = [
    "sm:translate-y-[0px]",
    "sm:translate-y-[42px]",
    "sm:translate-y-[84px]",
  ];
  const indicatorMovement = [
    "translate-x-[0px]",
    "translate-x-[120px]",
    "translate-x-[240px]",
  ];

  return (
    <div id="work" className="w-full text-left py-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        viewport={{ once: true }}
        className="max-w-[900px] h-full mx-auto p-6 sm:p-16 md:p-[2.5rem] md:max-w-[700px]"
      >
        <h2 className="text-2xl text-[#ccd6f6] mb-8 after:content-[''] after:h-[1px] w-full md:after:w-[200px] lg:after:w-[300px] after:bg-[#233554] after:block after:relative after:top-[-15px] after:ml-[275px]">
          <span className="text-[#64ffda] font-mono">03.</span> Where I&apos;ve
          Worked
        </h2>
        <div className="block relative sm:flex font-mono">
          <div className="sm:w-[25%] flex overflow-x-scroll relative sm:block sm:overflow-hidden text-sm">
            <button
              onClick={() => setActiveTab(1)}
              className={`${
                activeTab === 1 ? "text-[#64ffda]" : "text-[#8892b0]"
              } min-w-[120px] sm:w-full h-[42px] border-b-2 border-[#233554] shadow-none px-0 sm:px-[20px] py-3 rounded-none transition-all duration-200 text-center sm:border-b-0 sm:border-l-2 sm:text-left sm:min-w-0 hover:bg-[#112240] hover:text-[#64ffda]`}
            >
              K-Digital
            </button>
            <button
              onClick={() => setActiveTab(2)}
              className={`${
                activeTab === 2 ? "text-[#64ffda]" : "text-[#8892b0]"
              } min-w-[120px] sm:w-full h-[42px] border-b-2 border-[#233554] shadow-none px-0 sm:px-[20px] py-3 rounded-none transition-all duration-200 text-center sm:border-b-0 sm:border-l-2 sm:text-left sm:min-w-0 hover:bg-[#112240] hover:text-[#64ffda]`}
            >
              SAN
            </button>
            <button
              onClick={() => setActiveTab(3)}
              className={`${
                activeTab === 3 ? "text-[#64ffda]" : "text-[#8892b0]"
              } min-w-[120px] sm:w-full h-[42px] border-b-2 border-[#233554] shadow-none px-0 sm:px-[20px] py-3 rounded-none transition-all duration-200 text-center sm:border-b-0 sm:border-l-2 sm:text-left sm:min-w-0 hover:bg-[#112240] hover:text-[#64ffda]`}
            >
              KCyberOp
            </button>

            <div
              className={`absolute w-[120px] h-[2px] sm:h-[42px] sm:w-[2px] bottom-0 top-auto sm:top-0 sm:bottom-auto left-0 z-10 bg-[#64ffda] ${
                indicatorMovement[activeTab - 1]
              } sm:translate-x-0 translate-y-0 ${
                indicatorMovementMd[activeTab - 1]
              } duration-500 transition-all`}
            ></div>
          </div>
          <div className="sm:w-[75%] tracking-tight pt-8 sm:pt-0 sm:pl-6 font-sans">
            <div
              className={`${
                activeTab === 1
                  ? "h-auto opacity-100 transition-opacity duration-300 block"
                  : "h-0 opacity-0 transition-none [&>*]:hidden"
              }`}
            >
              <h3 className="text-[#ccd6f6] text-xl">
                Backend Developer{" "}
                <span className="text-[#64ffda]">
                  @{" "}
                  <Link href="https://kit.edu.kh">
                    <a
                      target="_blank"
                      className="inline-block after:block after:h-[1px] after:w-0 after:bg-[#64ffda] hover:after:w-full after:transition-all after:duration-300"
                    >
                      Kirirom Digital
                    </a>
                  </Link>
                </span>
              </h3>
              <p className="font-mono text-[#a8b2d1]">
                September 2021 - Present
              </p>
              <ul className="pt-3">
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Work with three other developers to build a chat app with
                  grammar correction, which requires Machine Learning
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Work with variety of different languages and frameworks such
                  as React Native, FastAPI, NestJS, NodeJS...etc.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Work with cloud infrastructure for application deployment such
                  as Google Cloud Platform and Amazon Web Services
                </li>
              </ul>
            </div>

            <div
              className={`${
                activeTab === 2
                  ? "h-auto opacity-100 transition-opacity duration-300 block"
                  : "h-0 opacity-0 transition-none [&>*]:hidden"
              }`}
            >
              <h3 className="text-[#ccd6f6] text-xl">
                Webmaster{" "}
                <span className="text-[#64ffda]">
                  @{" "}
                  <Link href="https://skyasianetwork.com">
                    <a
                      target="_blank"
                      className="inline-block after:block after:h-[1px] after:w-0 after:bg-[#64ffda] hover:after:w-full after:transition-all after:duration-300"
                    >
                      Sky Asia Network
                    </a>
                  </Link>
                </span>
              </h3>
              <p className="font-mono text-[#a8b2d1]">January - June 2022</p>
              <ul className="pt-3">
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Developed and shipped a job portal web application via
                  Wordpress
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Worked with cloud infrastructure for application deployment
                  such as OVH and infomaniak
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Directly communicated with clients on a daily basis for
                  requirements and progress update
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Provided support to Microsoft clients via Microsoft Admin
                </li>
              </ul>
            </div>

            <div
              className={`${
                activeTab === 3
                  ? "h-auto opacity-100 transition-opacity duration-300 block"
                  : "h-0 opacity-0 transition-none [&>*]:hidden"
              }`}
            >
              <h3 className="text-[#ccd6f6] text-xl">
                Cyber Security Specialist{" "}
                <span className="text-[#64ffda]">
                  @{" "}
                  <Link href="https://kcyberop.com">
                    <a
                      target="_blank"
                      className="inline-block after:block after:h-[1px] after:w-0 after:bg-[#64ffda] hover:after:w-full after:transition-all after:duration-300"
                    >
                      KCyberOp
                    </a>
                  </Link>
                </span>
              </h3>
              <p className="font-mono text-[#a8b2d1]">
                September 2019 - September 2021
              </p>
              <ul className="pt-3">
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Audited network infrastructure and provided full detail
                  reports of the result
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Implemented Graylog SIEM on Kirirom Network
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Researched on Incident Response, Network Defense and SIEM
                  tools
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Developed contents for Cyber Security Bootcamp and Advanced
                  Cyber Security Bootcamp
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Work;
