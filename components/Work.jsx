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
                  Spearhead the development of a new POS system frontend for
                  Cambodia and Myanmar, reducing system downtime and manual work
                  by 90% and 70%, respectively. The project won Project of the
                  Year for 2023.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Develop applications for lead management, policy servicing,
                  and customer servicing in Cambodia and Myanmar, with dynamic
                  configuration practice.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Integrate applications with core system and banking partners,
                  resulting in smooth data exchange and complete customer
                  information.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Contribute to the decommission of legacy systems, cutting
                  operational costs by 65% while enhancing reliability and
                  performance.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Oversee deployment of applications from Staging to Production.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Mentor team members, promoting a culture of knowledge sharing.
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
                Full-stack Developer (Contract){" "}
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
                  Developed a job portal mobile app for a sponsor company,
                  making job listings, applications, and candidate tracking more
                  efficient.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Worked on improving an AI-powered job matching system,
                  improving reliability rate by 75%.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Led a team of 3 engineers to build and launch a real-time chat
                  app with a writing assistant in 3 months.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Developed backend services with ExpressJS, NestJS, MongoDB,
                  and SQL for smooth data management.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Managed infrastructure with AWS (EC2, S3, Cloudwatch) to
                  ensure high availability and scalability.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Worked with QA teams to test and troubleshoot software
                  effectively.
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
                Cyber Security Researcher (Contract){" "}
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
                  Participated in security audits, reviewing system
                  configurations, access controls, and encryption methods for
                  compliance with industry best practices.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Assisted in configuring and maintaining Graylog SIEM to
                  monitor security events and detect anomalies.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Analyzed network traffic using Wireshark to detect and
                  investigate malicious activities or suspicious behavior.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Collaborated with team members to evaluate SIEM tools,
                  comparing event correlation, detection capabilities, and ease
                  of use.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Contributed to training and awareness sessions on incident
                  handling procedures for non-technical staff.
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
              <p className="font-mono text-[#a8b2d1]">
                January 2022 - June 2022
              </p>
              <ul className="pt-3">
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Designed and built responsive WordPress websites for various
                  clients.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Maintained clients&apos; websites, ensuring smooth performance
                  and uptime.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Improved websites&apos; SEO through structured data, metadata,
                  and optimized media.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Perform regular backups, updates, and troubleshoot technical
                  issues.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Collaborated with content teams to upload, edit, and organize
                  content effectively.
                </li>
                <li className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1">
                  Provided technical consultations to clients, ensuring clarity
                  in timeline and deliverables.
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
