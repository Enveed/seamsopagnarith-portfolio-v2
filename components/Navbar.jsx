import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", text: "Home", number: "01." },
  { href: "#about", text: "About", number: "02." },
  { href: "#work", text: "Experience", number: "03." },
  { href: "#project", text: "Projects", number: "04." },
  { href: "#contact", text: "Contact", number: "05." },
];

const MobileNavLink = ({ href, text, number, onClick, isActive }) => {
  return (
    <li
      onClick={onClick}
      className={`${
        isActive ? "text-[#64ffda]" : ""
      } hover:text-[#64ffda] mb-8 md:mb-12 cursor-pointer duration-300`}
    >
      <Link href={href}>
        <a>
          <span className="text-[#64ffda] block">{number}</span> {text}
        </a>
      </Link>
    </li>
  );
};

const DefaultNavLink = ({
  href,
  text,
  number,
  onClick,
  motionProps,
  isActive,
}) => {
  return (
    <motion.li
      {...motionProps}
      className={`${
        isActive ? "text-[#64ffda]" : ""
      } text-sm hover:text-[#64ffda] cursor-pointer duration-300`}
      onClick={onClick}
    >
      <Link href={href}>
        <a>
          <span className="text-[#64ffda]">{number}</span> {text}
        </a>
      </Link>
    </motion.li>
  );
};

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [navShadow, setNavShadow] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [curSection, setCurSection] = useState(0);

  const handleNav = useCallback(() => {
    setNav((prevNav) => !prevNav);
  }, []);

  useEffect(() => {
    function handleScroll() {
      const currentY = window.scrollY;
      setNavShadow(currentY >= 90);
      setHideNavbar(currentY > lastY); // Hide only after scrolling down a bit
      setLastY(currentY);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  const navbarClass = `fixed w-full h-20 z-[100] bg-[#0a192f] transition-all duration-500 font-mono ${
    hideNavbar ? "top-[-80px]" : "top-0"
  } ${navShadow ? "shadow-xl" : ""}`;

  return (
    <header className={navbarClass}>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold px-4 text-[#64ffda] md:px-12 md:text-4xl"
        >
          <Link href="/">Rith.</Link>
        </motion.p>
        <div className="px-2">
          <nav>
            <ol className="hidden md:flex items-center gap-6">
              {navLinks.map((link, index) => (
                <DefaultNavLink
                  isActive={curSection === index}
                  key={link.href}
                  {...link}
                  motionProps={{
                    initial: { opacity: 0, y: -75 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 1 + index * 0.1 },
                    viewport: { once: true },
                  }}
                  onClick={() => setCurSection(index)}
                />
              ))}
              <li>
                <Link href="assets/sopagnarith-seam-cv.pdf">
                  <motion.button
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    viewport={{ once: true }}
                    className="py-2 px-2 w-20 border border-[#64ffda] text-[#64ffda] hover:bg-[rgba(100,255,218,0.1)] duration-300"
                  >
                    Resume
                  </motion.button>
                </Link>
              </li>
            </ol>
          </nav>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            viewport={{ once: true }}
            className="md:hidden"
          >
            <AiOutlineMenu
              onClick={handleNav}
              size={30}
              className="hover:cursor-pointer fill-[#64ffda]"
            />
          </motion.div>
        </div>
      </div>

      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen backdrop-blur-sm"
            : ""
        }
        onClick={handleNav}
      >
        <aside
          className={`fixed right-0 top-0 w-[75%] sm:w-[60%] h-screen bg-[#112240] p-10 ease-linear duration-200 ${
            nav ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full">
            <AiOutlineClose
              onClick={handleNav}
              size={30}
              className="hover:cursor-pointer fill-[#64ffda] self-end"
            />
            <div className="grow flex flex-col items-center justify-center text-center text-lg md:text-2xl">
              <nav>
                <ol>
                  {navLinks.map((link, index) => (
                    <MobileNavLink
                      isActive={curSection === index}
                      key={link.href}
                      {...link}
                      onClick={() => {
                        setCurSection(index);
                        handleNav();
                      }}
                    />
                  ))}
                </ol>
              </nav>
              <Link href="assets/sopagnarith-seam-cv.pdf">
                <button className="w-40 border border-[#64ffda] text-[#64ffda] hover:bg-[rgba(100,255,218,0.1)] duration-300">
                  Resume
                </button>
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
};

export default Navbar;
