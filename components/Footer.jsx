import Link from "next/link";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { TbBrandTelegram } from "react-icons/tb";
import { motion } from "framer-motion";

const socialLinks = [
  {
    Icon: FiGithub,
    href: "https://github.com/Enveed",
  },
  {
    Icon: FiLinkedin,
    href: "https://www.linkedin.com/in/sopagnarith-seam-38571a253",
  },
  {
    Icon: TbBrandTelegram,
    href: "https://t.me/sopagnarith_seam",
  },
];

const SocialLink = ({ Icon, href }) => {
  return (
    <li>
      <Link href={href}>
        <a target="_blank">
          <Icon size={20} className="hover:stroke-[#64ffda] duration-300" />
        </a>
      </Link>
    </li>
  );
};

const Footer = () => {
  return (
    <footer className="w-full text-center pt-12 group cursor-pointer font-mono">
      <ul className="flex md:hidden justify-center gap-8 py-4">
        {socialLinks.map((link) => (
          <SocialLink key={link.href} {...link} />
        ))}
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
          {socialLinks.map((link) => (
            <SocialLink key={link.href} {...link} />
          ))}
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
    </footer>
  );
};

export default Footer;
