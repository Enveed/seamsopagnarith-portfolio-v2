import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const skills = [
  "NextJS (React)",
  "ExpressJS (NodeJS)",
  "C#(.NET)",
  "AWS",
  "Jenkins",
  "Kubernetes",
  "SQL",
  "MongoDB",
];

const Skill = ({ name }) => {
  return (
    <li className="relative pl-4 before:left-0 before:absolute before:content-['▹'] before:text-[#64ffda]">
      {name}
    </li>
  );
};

const About = () => {
  return (
    <section id="about" className="w-full text-center py-12 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        viewport={{ once: true }}
        className="max-w-[900px] w-full mx-auto p-6 text-left sm:p-16"
      >
        <h2 className="text-2xl text-[#ccd6f6] w-full sm:mb-8 after:content-[''] after:h-[1px] md:after:w-[200px] lg:after:w-[300px] after:bg-[#233554] after:block after:relative after:top-[-15px] after:ml-[175px]">
          <span className="text-[#64ffda] font-mono">02.</span> About Me
        </h2>
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-[65%] pr-0 py-12 md:pr-12 sm:py-0">
            <p className="mb-4">
              Hello! My name is Sopagnarith, and I enjoy exploring and
              implementing new technologies. I began my career in cybersecurity
              in 2019, where I had numerous opportunities to take on various
              cybersecurity tasks at{" "}
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
              However, towards the end of 2021, I unknowingly discovered my
              profound interest in software development, which heavily
              influenced my decision to make a major career shift in that
              direction.
            </p>
            <p className="my-4">
              Despite 2022 being my first intensive year in the field, I had the
              privilege of working on multiple professional projects, including
              a job portal app, a COVID-19 travel app, and a chat app with
              grammar correction. I started my professional journey at{" "}
              <Link href="https://jobify.works">
                <a
                  target="_blank"
                  className="inline-block text-[#64ffda] after:block after:h-[1px] after:w-0 after:bg-[#64ffda] hover:after:w-full after:transition-all after:duration-300"
                >
                  a revolutionary startup
                </a>
              </Link>{" "}
              that aims to connect IT workers in Cambodia with companies in need
              of talent. Most recently, I&apos;ve had the opportunity to work at{" "}
              <Link href="https://www.prudential.com.kh">
                <a
                  target="_blank"
                  className="inline-block text-[#64ffda] after:block after:h-[1px] after:w-0 after:bg-[#64ffda] hover:after:w-full after:transition-all after:duration-300"
                >
                  one of Cambodia&apos;s largest life insurance companies
                </a>
              </Link>
              , which strives to raise insurance awareness and ensure a better
              livelihood for Khmer people.
            </p>
            <p className="my-4">
              Here are a few technologies I&apos;ve been working with recently:
            </p>
            <ul className="grid grid-cols-skill-grid gap-2 overflow-hidden font-mono">
              {skills.map((skill) => (
                <Skill name={skill} key={skill} />
              ))}
            </ul>
          </div>
          <div className="w-full md:w-[35%] py-12 md:py-0">
            <Image
              src="/assets/sopagnarith-seam-image.png"
              alt="seam-sopagnarith"
              className="rounded-sm object-cover object-[50%_20%]"
              layout="responsive"
              width={500}
              height={500}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
