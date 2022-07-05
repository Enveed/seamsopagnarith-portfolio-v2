import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact" className="w-full text-center py-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        viewport={{ once: true }}
        className="max-w-[600px] w-full mx-auto p-6 sm:p-12 text-center"
      >
        <h2 className="text-[#64ffda] text-lg pb-5 font-mono font-normal">
          05. What&apos;s Next?
        </h2>
        <h2 className="text-[#ccd6f6] text-5xl pb-5">Get In Touch</h2>
        <p className="tracking-normal text-[#8892b0]">
          I&apos;m currently looking for job opportunities, my inbox is always
          open. I&apos;ll try my best to get back to you asap!
        </p>
        <Link href="mailto:sopagnarithseam@gmail.com">
          <a className="inline-block p-4 mt-[50px] shadow-xl rounded-md w-40 border border-[#64ffda] text-[#64ffda] hover:bg-[rgba(100,255,218,0.1)] duration-300 font-mono">
            Say Hello
          </a>
        </Link>
      </motion.div>
    </div>
  );
};

export default Contact;
