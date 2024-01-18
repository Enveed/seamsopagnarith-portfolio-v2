import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function Work() {
  const [activeTab, setActiveTab] = useState(1);
  const indicatorMovementMd = [
    "sm:translate-y-[0px]",
    "sm:translate-y-[60px]",
    "sm:translate-y-[120px]",
    "sm:translate-y-[180px]",
    "sm:translate-y-[240px]",
  ];
  const indicatorMovement = [
    "translate-x-[0px]",
    "translate-x-[120px]",
    "translate-x-[240px]",
    "translate-x-[360px]",
    "translate-x-[480px]",
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
              } min-w-[120px] sm:w-full h-[60px] border-b-2 border-[#233554] shadow-none px-0 sm:px-[20px] py-3 rounded-none transition-all duration-200 text-center sm:border-b-0 sm:border-l-2 sm:text-left sm:min-w-0 hover:bg-[#112240] hover:text-[#64ffda]`}
            >
              Prudential Cambodia
            </button>
            <button
              onClick={() => setActiveTab(2)}
              className={`${
                activeTab === 2 ? "text-[#64ffda]" : "text-[#8892b0]"
              } min-w-[120px] sm:w-full h-[60px] border-b-2 border-[#233554] shadow-none px-0 sm:px-[20px] py-3 rounded-none transition-all duration-200 text-center sm:border-b-0 sm:border-l-2 sm:text-left sm:min-w-0 hover:bg-[#112240] hover:text-[#64ffda]`}
            >
              Jobify Cambodia
            </button>
            <button
              onClick={() => setActiveTab(3)}
              className={`${
                activeTab === 3 ? "text-[#64ffda]" : "text-[#8892b0]"
              } min-w-[120px] sm:w-full h-[60px] border-b-2 border-[#233554] shadow-none px-0 sm:px-[20px] py-3 rounded-none transition-all duration-200 text-center sm:border-b-0 sm:border-l-2 sm:text-left sm:min-w-0 hover:bg-[#112240] hover:text-[#64ffda]`}
            >
              Sky Asia Network
            </button>
            <button
              onClick={() => setActiveTab(4)}
              className={`${
                activeTab === 4 ? "text-[#64ffda]" : "text-[#8892b0]"
              } min-w-[120px] sm:w-full h-[60px] border-b-2 border-[#233554] shadow-none px-0 sm:px-[20px] py-3 rounded-none transition-all duration-200 text-center sm:border-b-0 sm:border-l-2 sm:text-left sm:min-w-0 hover:bg-[#112240] hover:text-[#64ffda]`}
            >
              Kirirom Institute
            </button>
            <button
              onClick={() => setActiveTab(5)}
              className={`${
                activeTab === 5 ? "text-[#64ffda]" : "text-[#8892b0]"
              } min-w-[120px] sm:w-full h-[60px] border-b-2 border-[#233554] shadow-none px-0 sm:px-[20px] py-3 rounded-none transition-all duration-200 text-center sm:border-b-0 sm:border-l-2 sm:text-left sm:min-w-0 hover:bg-[#112240] hover:text-[#64ffda]`}
            >
              Kirirom Institute
            </button>

            <div
              className={`absolute w-[120px] h-[2px] sm:h-[60px] sm:w-[2px] bottom-0 top-auto sm:top-0 sm:bottom-auto left-0 z-10 bg-[#64ffda] ${
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
                Supervisor Application Development & Support{" "}
                <span className="text-[#64ffda]">
                  @{" "}
                  <Link href="https://www.prudential.com.kh">
                    <a
                      target="_blank"
                      className="inline-block after:block after:h-[1px] after:w-0 after:bg-[#64ffda] hover:after:w-full after:transition-all after:duration-300"
                    >
                      Prudential Cambodia
                    </a>
                  </Link>
                </span>
              </h3>
              <p className="font-mono text-[#a8b2d1]">March 2023 - Present</p>
              <ul className="pt-3">
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Mainly responsible for developing the frontend of insurance
                  selling platform for agents, enabling the company to hit
                  target KPIs in two LBUs and the project to win Project of the
                  Year for 2023.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Developing and maintaining “dynamic” frontend solutions with
                  ReactJS, Context API, Material UI, AngularJS, Axios, to enable
                  faster delivery and more flexibility in accordance with
                  business requirements.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Maintain deployment setup of various in-house applications
                  with Jenkins, Kubernetes, SQL Server, MongoDB.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Help supervise internal frontend engineering team, providing
                  guidance and pointers to improve team performance and app
                  quality.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Collaborate with BA and PM teams to deliver high-quality
                  solutions, ensuring adherence to timelines and engineering
                  standards.
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
                Fullstack Developer{" "}
                <span className="text-[#64ffda]">
                  @{" "}
                  <Link href="https://jobify.works">
                    <a
                      target="_blank"
                      className="inline-block after:block after:h-[1px] after:w-0 after:bg-[#64ffda] hover:after:w-full after:transition-all after:duration-300"
                    >
                      Jobify Cambodia
                    </a>
                  </Link>
                </span>
              </h3>
              <p className="font-mono text-[#a8b2d1]">
                November 2022 - March 2023
              </p>
              <ul className="pt-3">
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Developed and maintained the company&apos;s flagship mobile
                  application using React Native, NativeBase, Redux, Redux-saga,
                  creating a high-quality user experience.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Contributed to the development and deployment of a
                  job-matching AI model, resulting in a 50% improvement in
                  response rate.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Worked with Amazon Web Service services such as: EC2, S3,
                  Cloudwatch…etc., to host and maintain the company&apos;s web
                  infrastructure.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Implemented and maintained testing strategies such as: unit
                  test (Jest) and load test (k6.io), to ensure the robustness of
                  the mobile application and backend services.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Worked closely with the QA team to identify and address bugs
                  and issues in a timely manner.
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
                  Designed and developed customers&apos; websites using
                  Wordpress, HTML, CSS to enable faster delivery in accordance
                  with business&apos; requirements.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Deployed and maintained customers&apos; websites with
                  OVHCloud, infomaniak, CPanel.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Assisted sales staff in communicating with customers to better
                  understand their requirements and to update progress in a
                  timely manner.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Assisted company in providing Microsoft Support services to
                  customers.
                </li>
              </ul>
            </div>

            <div
              className={`${
                activeTab === 4
                  ? "h-auto opacity-100 transition-opacity duration-300 block"
                  : "h-0 opacity-0 transition-none [&>*]:hidden"
              }`}
            >
              <h3 className="text-[#ccd6f6] text-xl">
                Backend Developer (Intern){" "}
                <span className="text-[#64ffda]">
                  @{" "}
                  <Link href="https://kit.edu.kh">
                    <a
                      target="_blank"
                      className="inline-block after:block after:h-[1px] after:w-0 after:bg-[#64ffda] hover:after:w-full after:transition-all after:duration-300"
                    >
                      Kirirom Institute of Technology
                    </a>
                  </Link>
                </span>
              </h3>
              <p className="font-mono text-[#a8b2d1]">
                September 2021 - November 2022
              </p>
              <ul className="pt-3">
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Led a team of three developers to build a chat app with
                  grammar correction feature in a span of 4 months by using
                  React Native, GunJS, Firebase, FastAPI, Google T5 Model.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Built backend REST API for various projects with ExpressJS,
                  NestJS, MongoDB, Mongoose.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Worked with cloud infrastructure for application deployment,
                  including Google Cloud Platform and Amazon Web Services.
                </li>
              </ul>
            </div>

            <div
              className={`${
                activeTab === 5
                  ? "h-auto opacity-100 transition-opacity duration-300 block"
                  : "h-0 opacity-0 transition-none [&>*]:hidden"
              }`}
            >
              <h3 className="text-[#ccd6f6] text-xl">
                Cyber Security Researcher (Intern){" "}
                <span className="text-[#64ffda]">
                  @{" "}
                  <Link href="https://kit.edu.kh">
                    <a
                      target="_blank"
                      className="inline-block after:block after:h-[1px] after:w-0 after:bg-[#64ffda] hover:after:w-full after:transition-all after:duration-300"
                    >
                      Kirirom Institute of Technology
                    </a>
                  </Link>
                </span>
              </h3>
              <p className="font-mono text-[#a8b2d1]">
                September 2019 - September 2021
              </p>
              <ul className="pt-3">
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Performed audit on the internal network infrastructure and
                  provided full detail reports of the result to improve internal
                  network security.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Implemented Graylog SIEM on the internal network to detect
                  potential attacks that may be occuring on the network.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Developed contents for Cyber Security Bootcamp and Advanced
                  Cyber Security Bootcamp.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Researched on Incident Response, Network Defense and SIEM
                  tools.
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
