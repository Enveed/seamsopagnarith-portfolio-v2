import { AiOutlineFolder } from "react-icons/ai";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    link: "https://prueshop.prudential.com.kh/eposweb",
    title: "Insurance Selling Platform",
    description:
      "A platform that aims to empower insurance agents in managing policy applications and client interactions. This system enables agents to quickly process insurance applications, track their status, and deliver seamless customer service.",
    tech: [
      "ReactJS",
      "MUI",
      "Context",
      "MongoDB",
      "MySQL",
      "Kubernetes",
      "Jenkins",
    ],
  },
  {
    link: "https://prueshop.prudential.com.kh/pmli/lead",
    title: "Client Tracking Platform",
    description:
      "A specialized solution designed to streamline the process of capturing, tracking, nurturing, and converting leads into loyal policyholders.",
    tech: ["ReactJS", "MUI", "Zustand", "MongoDB", "Kubernetes", "Jenkins"],
  },
  {
    link: "https://prueshop.prudential.com.kh/sale-portal/",
    title: "Sale Portal",
    description:
      "A data-driven focused platform that helps agents optimize their strategies, close more deals, and achieve their sales targets efficiently by providing deep insights into their performance.",
    tech: [
      "C#(.NET)",
      "MVC",
      "Bootstrap",
      "jQuery",
      "SQL",
      "Kubernetes",
      "Jenkins",
    ],
  },
  {
    link: "https://prueshop.prudential.com.kh/billpayment/",
    title: "Payment Link Generator",
    description:
      "A gateway that allows customers to pay for their insurance policy via Cambodia's most popular payment options, reducing the risk of missed deadlines and policy lapses.",
    tech: ["ReactJS", "MUI", "Context", "C#(.NET)", "Kubernetes", "Jenkins"],
  },
  {
    link: "https://prueshop.prudential.com.kh/pv-form/",
    title: "Agent Recruitment Portal",
    description:
      "A user-friendly application that helps make the recruitment process smooth and efficient for aspiring insurance agents. The portal allows individuals to quickly submit their applications and necessary documents without the hassle of complicated procedures.",
    tech: ["ReactJS", "MUI", "C#(.NET)", "MongoDB", "Kubernetes", "Jenkins"],
  },
  {
    link: "",
    title: "Agent Recruitment Admin Portal",
    description:
      "An internal centralized portal designed to manage and oversee all recruitment submissions for insurance agents. This portal provides administrators with the tools they need to review, track, and manage agent applications in a streamlined and organized manner.",
    tech: ["ReactJS", "MUI", "C#(.NET)", "MongoDB", "Kubernetes", "Jenkins"],
  },
  {
    link: "https://play.google.com/store/apps/details?id=com.jobifycambodia",
    title: "Jobify Mobile App",
    description:
      "A mobile application that aims to empower job seekers by providing personalized recommendations and efficient job matching with the power of AI.",
    tech: [
      "React-Native",
      "NativeBase",
      "Redux",
      "Firebase",
      "ExpressJS",
      "FastAPI",
    ],
  },
  {
    link: "https://jobify.works",
    title: "Jobify Web App",
    description:
      "A job matching platform that acts as an intermediary between job seekers and potential employers, easing the hiring process for both parties.",
    tech: ["NuxtJS", "VueX", "ExpressJS", "AWS", "Nginx", "GoDaddy"],
  },
  {
    link: "/",
    title: "Portfolio Website V2",
    description:
      "Second iteration of my portfolio website that I built with Next.js and hosted on Netlify. This website aims to help people understand more about my professional background.",
    tech: ["NextJS", "Tailwind CSS", "Framer Motion", "Github", "Netlify"],
  },
];

const ProjectCard = ({ link, title, description, tech }) => {
  const cardContent = (
    <div className="flex group justify-between flex-col bg-[#112240] shadow-2xl p-6 rounded-md cursor-pointer h-full">
      <main>
        <div className="pb-4">
          <AiOutlineFolder size={50} className="fill-[#64ffda]" />
        </div>
        <h3 className="text-[#ccd6f6] group-hover:text-[#64ffda] text-lg pb-2">
          {title}
        </h3>
        <p className="text-[#a8b2d1] pb-2">{description}</p>
      </main>
      <footer>
        <ul className="flex flex-wrap gap-x-4 text-xs py-2 font-mono text-[#8892b0]">
          {tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </footer>
    </div>
  );

  const motionWrapper = (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1, transition: { delay: 1 } }}
      whileHover={{ scale: 1.05 }}
      viewport={{ once: true }}
      className="h-full"
    >
      {cardContent}
    </motion.div>
  );

  if (link === "" || link === "/") {
    return (
      <Link href={link}>
        <a>{motionWrapper}</a>
      </Link>
    );
  }

  return (
    <Link href={link}>
      <a target="_blank">{motionWrapper}</a>
    </Link>
  );
};

const Project = () => {
  return (
    <section id="project" className="w-full text-left py-12">
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
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
