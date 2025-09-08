import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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

const workExperience = [
  {
    company: "Prudential Cambodia",
    role: "Senior Software Engineer",
    date: "March 2023 - July 2025",
    link: "https://www.prudential.com.kh",
    tasks: [
      "Lead the development of a new POS system frontend for Cambodia and Myanmar, reducing system downtime and manual work by 90% and 70%, respectively. The project won Project of the Year in 2023, followed by one of the platform's featured products receiving the same award in 2024.",
      "Develop applications for agent servicing, customer servicing, and policy servicing in Cambodia and Myanmar, with dynamic configuration practice",
      "Integrate applications with core system and banking partners, resulting in smooth data exchange and complete customer information.",
      "Contribute to the decommission of legacy systems, cutting operational costs by 65% while enhancing reliability and performance.",
      "Develop automated CI/CD pipelines to streamline application deployment from development to production.",
      "Mentor team members, promoting a culture of knowledge sharing.",
    ],
  },
  {
    company: "Kirirom Institute of Technology",
    role: "Full-stack Developer (Contract)",
    date: "September 2021 - March 2023",
    link: "https://kit.edu.kh",
    tasks: [
      "Developed a job portal mobile app for a sponsored company, streamlining job listings, job applications, and candidate tracking.",
      "Enhanced a job matching AI model, boosting reliability by 75%.",
      "Led a team of 3 engineers to build and launch a real-time chat app with a writing assistant in 3 months.",
      "Developed backend services with ExpressJS, NestJS, MongoDB, and SQL for efficient data storage and retrieval.",
      "Managed infrastructure with AWS (EC2, S3, Cloudwatch) to ensure high availability and scalability.",
    ],
  },
  {
    company: "Kirirom Institute of Technology",
    role: "Cyber Security Researcher (Contract)",
    date: "September 2019 - September 2021",
    link: "https://kit.edu.kh",
    tasks: [
      "Participated in security audits, reviewing system configurations, access controls, and encryption methods for compliance with industry best practices.",
      "Assisted in configuring and maintaining Graylog SIEM to monitor security events and detect anomalies.",
      "Analyzed network traffic using Wireshark to detect and investigate malicious activities or suspicious behavior.",
      "Collaborated with team members to evaluate SIEM tools, comparing event correlation, detection capabilities, and ease of use.",
      "Contributed to training and awareness sessions on incident handling procedures for non-technical staff.",
    ],
  },
  {
    company: "Sky Asia Network",
    role: "Webmaster",
    date: "January 2022 - June 2022",
    link: "https://skyasianetwork.com",
    tasks: [
      "Designed and built responsive WordPress websites for various clients.",
      "Maintained clients' websites, ensuring smooth performance and uptime.",
      "Improved websites' SEO through structured data, metadata, and optimized media.",
      "Performed regular backups, updates, and troubleshoot technical issues.",
      "Collaborated with content teams to upload, edit, and organize content effectively.",
      "Provided technical consultations to clients, ensuring clarity in timeline and deliverables.",
    ],
  },
];

const TabButton = ({ isActive, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`w-[120px] min-w-[120px] sm:w-full h-[80px] border-b-2 border-[#233554] shadow-none px-0 sm:px-[20px] py-3 rounded-none transition-all duration-200 text-center sm:border-b-0 sm:border-l-2 sm:text-left sm:min-w-0 hover:bg-[#112240] hover:text-[#64ffda] ${
        isActive ? "text-[#64ffda]" : "text-[#8892b0]"
      }`}
    >
      {children}
    </button>
  );
};

const TabContent = ({ experience, isActive }) => {
  return (
    <div
      className={`${
        isActive
          ? "h-auto opacity-100 transition-opacity duration-300 block"
          : "h-0 opacity-0 transition-none [&>*]:hidden"
      }`}
    >
      <h3 className="text-[#ccd6f6] text-xl">
        {experience.role}{" "}
        <span className="text-[#64ffda]">
          @{" "}
          <Link href={experience.link}>
            <a
              target="_blank"
              className="inline-block after:block after:h-[1px] after:w-0 after:bg-[#64ffda] hover:after:w-full after:transition-all after:duration-300"
            >
              {experience.company}
            </a>
          </Link>
        </span>
      </h3>
      <p className="font-mono text-[#a8b2d1]">{experience.date}</p>
      <ul className="pt-3">
        {experience.tasks.map((task, i) => (
          <li
            key={i}
            className="relative pl-7 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda] py-1"
          >
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Work = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="work" className="w-full text-left py-12">
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
            {workExperience.map((exp, i) => (
              <TabButton
                key={exp.company + exp.role}
                isActive={activeTab === i}
                onClick={() => setActiveTab(i)}
              >
                {exp.company}
              </TabButton>
            ))}
            <div
              className={`absolute w-[120px] h-[2px] sm:h-[80px] sm:w-[2px] bottom-0 top-auto sm:top-0 sm:bottom-auto left-0 z-10 bg-[#64ffda] ${indicatorMovement[activeTab]} sm:translate-x-0 translate-y-0 ${indicatorMovementMd[activeTab]} duration-500 transition-all`}
            ></div>
          </div>
          <div className="sm:w-[75%] tracking-tight pt-8 sm:pt-0 sm:pl-6 font-sans">
            {workExperience.map((exp, i) => (
              <TabContent
                key={exp.company + exp.role}
                experience={exp}
                isActive={activeTab === i}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Work;
