import Link from "next/link";
import React from "react";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { TbBrandTelegram } from "react-icons/tb";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="w-full text-center pt-12 group cursor-pointer font-mono">
      <ul className="flex md:hidden justify-center gap-8 py-4">
        <li>
          <Link href="https://github.com/Enveed">
            <a target="_blank">
              <FiGithub
                size={20}
                className="hover:stroke-[#64ffda] duration-300"
              />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/sopagnarith-seam-38571a253">
            <a target="_blank">
              <FiLinkedin
                size={20}
                className="hover:stroke-[#64ffda] duration-300"
              />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://t.me/enveed13">
            <a target="_blank">
              <TbBrandTelegram
                size={20}
                className="hover:stroke-[#64ffda] duration-300"
              />
            </a>
          </Link>
        </li>
      </ul>
      <p className="text-sm hover:text-[#64ffda] duration-300 mb-2">
        <Link href="https://brittanychiang.com">
          <a target="_blank">Designed by Brittany Chiang</a>
        </Link>
      </p>
      <p className="text-sm hover:text-[#64ffda] duration-300 mb-2">
        <Link href="/">
          <a>Built by Sopagnarith Seam</a>
        </Link>
      </p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4 }}
        viewport={{ once: true }}
        className="hidden md:inline-block fixed bottom-0 left-[20px] xl:left-[40px]"
      >
        <ul className="flex flex-col justify-center items-center gap-8 after:block after:content-[''] after:h-[90px] after:w-[1px] after:bg-[#a8b2d1]">
          <li>
            <Link href="https://github.com/Enveed">
              <a target="_blank">
                <FiGithub
                  size={20}
                  className="hover:stroke-[#64ffda] hover:translate-y-[-10%] duration-300"
                />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/sopagnarith-seam-38571a253">
              <a target="_blank">
                <FiLinkedin
                  size={20}
                  className="hover:stroke-[#64ffda] hover:translate-y-[-10%] duration-300"
                />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://t.me/enveed13">
              <a target="_blank">
                <TbBrandTelegram
                  size={20}
                  className="hover:stroke-[#64ffda] hover:translate-y-[-10%] duration-300"
                />
              </a>
            </Link>
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4 }}
        viewport={{ once: true }}
        className="hidden md:inline-block fixed bottom-0 right-[20px] xl:right-[40px] font-mono"
      >
        <div className="flex flex-row justify-center items-center hover:text-[#64ffda] after:content-[''] after:h-[90px] after:w-[1px] after:bg-[#a8b2d1] after:block writing-mode-rl duration-300">
          <Link href="mailto:sopagnarithseam@gmail.com">
            <a
              target="_blank"
              className="hover:translate-y-[-2.5%] my-[20px] duration-300"
            >
              sopagnarithseam@gmail.com
            </a>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
