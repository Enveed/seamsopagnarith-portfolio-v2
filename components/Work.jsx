import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function Work() {
  const [activeTab, setActiveTab] = useState(1);
  const indicatorMovementMd = [
    "sm:translate-y-[0px]",
    "sm:translate-y-[80px]",
    "sm:translate-y-[160px]",
    "sm:translate-y-[240px]",
    "sm:translate-y-[320px]",
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
              } min-w-[120px] sm:w-full h-[80px] border-b-2 border-[#233554] shadow-none px-0 sm:px-[20px] py-3 rounded-none transition-all duration-200 text-center sm:border-b-0 sm:border-l-2 sm:text-left sm:min-w-0 hover:bg-[#112240] hover:text-[#64ffda]`}
            >
              Prudential Cambodia
            </button>
            <button
              onClick={() => setActiveTab(2)}
              className={`${
                activeTab === 2 ? "text-[#64ffda]" : "text-[#8892b0]"
              } min-w-[120px] sm:w-full h-[80px] border-b-2 border-[#233554] shadow-none px-0 sm:px-[20px] py-3 rounded-none transition-all duration-200 text-center sm:border-b-0 sm:border-l-2 sm:text-left sm:min-w-0 hover:bg-[#112240] hover:text-[#64ffda]`}
            >
              Kirirom Institute of Technology
            </button>
            <button
              onClick={() => setActiveTab(3)}
              className={`${
                activeTab === 3 ? "text-[#64ffda]" : "text-[#8892b0]"
              } min-w-[120px] sm:w-full h-[80px] border-b-2 border-[#233554] shadow-none px-0 sm:px-[20px] py-3 rounded-none transition-all duration-200 text-center sm:border-b-0 sm:border-l-2 sm:text-left sm:min-w-0 hover:bg-[#112240] hover:text-[#64ffda]`}
            >
              {" "}
              Kirirom Institute of Technology
            </button>
            <button
              onClick={() => setActiveTab(4)}
              className={`${
                activeTab === 4 ? "text-[#64ffda]" : "text-[#8892b0]"
              } min-w-[120px] sm:w-full h-[80px] border-b-2 border-[#233554] shadow-none px-0 sm:px-[20px] py-3 rounded-none transition-all duration-200 text-center sm:border-b-0 sm:border-l-2 sm:text-left sm:min-w-0 hover:bg-[#112240] hover:text-[#64ffda]`}
            >
              Sky Asia Network
            </button>

            <div
              className={`absolute w-[120px] h-[2px] sm:h-[80px] sm:w-[2px] bottom-0 top-auto sm:top-0 sm:bottom-auto left-0 z-10 bg-[#64ffda] ${
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
                Senior Supervisor, Application Development & Support{" "}
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
                  selling platform for agents using ReactJS, Context API,
                  Material UI, AngularJS, Axios, enabling the company to hit
                  target KPIs in two LBUs ({" "}
                  <Link href="https://prueshop.prudential.com.kh/eposweb">
                    <a
                      target="_blank"
                      className="inline-block text-[#64ffda] after:block after:h-[1px] after:w-0 after:bg-[#64ffda] hover:after:w-full after:transition-all after:duration-300"
                    >
                      Cambodia
                    </a>
                  </Link>{" "}
                  and{" "}
                  <Link href="https://prueshop.prudential.com.kh/pmli/eposweb">
                    <a
                      target="_blank"
                      className="inline-block text-[#64ffda] after:block after:h-[1px] after:w-0 after:bg-[#64ffda] hover:after:w-full after:transition-all after:duration-300"
                    >
                      Myanmar
                    </a>
                  </Link>
                  ) and the project to win Project of the Year for 2023.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Mainly responsible for developing the frontend of various
                  projects such as: Client Tracking Platform ({" "}
                  <Link href="https://prueshop.prudential.com.kh/lead">
                    <a
                      target="_blank"
                      className="inline-block text-[#64ffda] after:block after:h-[1px] after:w-0 after:bg-[#64ffda] hover:after:w-full after:transition-all after:duration-300"
                    >
                      Cambodia
                    </a>
                  </Link>{" "}
                  and
                  <Link href="https://prueshop.prudential.com.kh/pmli/lead">
                    <a
                      target="_blank"
                      className="inline-block text-[#64ffda] after:block after:h-[1px] after:w-0 after:bg-[#64ffda] hover:after:w-full after:transition-all after:duration-300"
                    >
                      Myanmar
                    </a>
                  </Link>
                  ) and{" "}
                  <Link href="https://prueshop.prudential.com.kh/billpayment">
                    <a
                      target="_blank"
                      className="inline-block text-[#64ffda] after:block after:h-[1px] after:w-0 after:bg-[#64ffda] hover:after:w-full after:transition-all after:duration-300"
                    >
                      Payment Link Generator
                    </a>
                  </Link>{" "}
                  by using ReactJS, Context API, Zustand, Material UI, Axios
                  with “dynamic” approach in mind to enable faster delivery and
                  more flexibility in accordance with business requirements
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Work with MongoDB(Atlas, Realm) to improve application
                  performance, enable more functionalities and enhance real-time
                  payment synchronization.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Develop and maintain RESTful API with C#(.NET), MongoDB
                  Driver, .NET Identity for communication between backend and
                  frontend systems of{" "}
                  <span className="text-[#64ffda]">
                    Agent Recruitment Platform
                  </span>
                  .
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Maintain deployment setup of various in-house applications
                  with Jenkins, Kubernetes, SQL Server, MongoDB, reducing
                  deployment time and manual effort
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Help supervise internal frontend engineering team, providing
                  guidance and pointers to improve team performance and app
                  quality.
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
                Full-stack Developer (Intern){" "}
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
                September 2021 - March 2023
              </p>
              <ul className="pt-3">
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Developed and maintained the{" "}
                  <Link href="https://play.google.com/store/apps/details?id=com.jobifycambodia">
                    <a
                      target="_blank"
                      className="inline-block text-[#64ffda] after:block after:h-[1px] after:w-0 after:bg-[#64ffda] hover:after:w-full after:transition-all after:duration-300"
                    >
                      Jobify Cambodia&apos;s flagship mobile application
                    </a>
                  </Link>{" "}
                  using React Native, NativeBase, Redux-saga, creating a
                  high-quality user experience.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Led a team of three developers to build a chat app with
                  grammar correction feature in a span of 4 months by using
                  React Native, GunJS, Firebase, FastAPI, Google T5 Model.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Developed and maintained backend for various projects by using
                  technologies such as: NodeJS, ExpressJS, NestJS, MongoDB,
                  Mongoose, SQL, Knex...etc.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Worked with Amazon Web Service services such as: EC2, S3,
                  Cloudwatch, to host and maintain the web infrastructure,
                  improving system reliability and scalability.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Implemented and maintained testing strategies such as: unit
                  test (Jest) and load test (k6.io), to ensure the robustness of
                  mobile applications and backend services.
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

            <div
              className={`${
                activeTab === 4
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
                  Designed and developed customers&apos; websites such as:
                  <Link href="https://diamondbedding.asia">
                    <a
                      target="_blank"
                      className="inline-block text-[#64ffda] after:block after:h-[1px] after:w-0 after:bg-[#64ffda] hover:after:w-full after:transition-all after:duration-300"
                    >
                      Diamond Bedding Asia
                    </a>
                  </Link>
                  ,{" "}
                  <Link href="https://www.lbcbiz.com">
                    <a
                      target="_blank"
                      className="inline-block text-[#64ffda] after:block after:h-[1px] after:w-0 after:bg-[#64ffda] hover:after:w-full after:transition-all after:duration-300"
                    >
                      Leopard Business Consultancy
                    </a>
                  </Link>
                  …etc. by using Wordpress, HTML, CSS to enable faster delivery
                  in accordance with business requirements.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Deployed and maintained customers&apos; websites with
                  OVHCloud, infomaniak, CPanel, enhancing scalability and
                  reducing operational costs.
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
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Work;
