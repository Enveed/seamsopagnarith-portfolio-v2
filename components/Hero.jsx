import Link from "next/link";
import { motion } from "framer-motion";

const motionProps = (delay) => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { delay },
  viewport: { once: true },
});

const Hero = () => {
  return (
    <section id="hero" className="w-full pt-20 xs:pt-0 xs:h-screen">
      <div className="max-w-[1100px] w-full h-full mx-auto p-6 flex flex-col justify-center space-y-4 text-left md:space-y-8 sm:p-16">
        <motion.h1
          {...motionProps(2.65)}
          className="font-normal text-xl text-[#64ffda] font-mono"
        >
          Hi, my name is
        </motion.h1>
        <motion.h2
          {...motionProps(2.8)}
          className="text-4xl text-[#ccd6f6] md:text-6xl font-sans"
        >
          Sopagnarith SEAM.
        </motion.h2>
        <motion.h2
          {...motionProps(2.95)}
          className="text-4xl text-[#a8b2d1] md:text-6xl font-sans"
        >
          I build things for the web.
        </motion.h2>
        <motion.p {...motionProps(3.1)} className="max-w-lg font-sans">
          I&apos;m a software engineer with 4 years of experience in software
          development, mainly working with modern full-stack JavaScript
          technologies. I have worked in various industries, including
          insurance, software solutions, and startups. I love learning new
          technologies and finding innovative solutions to meet evolving
          business needs.
        </motion.p>
        <Link href="#contact">
          <motion.a
            {...motionProps(3.25)}
            className="font-mono inline-block p-4 shadow-xl rounded-md w-40 border border-[#64ffda] text-[#64ffda] hover:bg-[rgba(100,255,218,0.1)] duration-300 text-center cursor-pointer"
          >
            Contact Me
          </motion.a>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
