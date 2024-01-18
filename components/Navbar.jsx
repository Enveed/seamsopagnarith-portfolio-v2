import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [navShadow, setNavShadow] = useState(false);
  const [y, setY] = useState(0);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setNavShadow(true);
      } else {
        setNavShadow(false);
      }
    };

    const handleNavigation = () => {
      if (window.scrollY > y) {
        setHideNavbar(true);
      } else {
        setHideNavbar(false);
      }
      setY(window.scrollY);
    };

    window.addEventListener("scroll", handleNavigation);
    window.addEventListener("scroll", handleShadow);

    return () => {
      window.removeEventListener("scroll", handleShadow);
      window.removeEventListener("scroll", handleNavigation);
    };
  });

  return (
    <div
      className={
        hideNavbar
          ? `fixed w-full h-20 z-[100] bg-[#0a192f] top-[-80px] transition-all duration-500 font-mono`
          : `fixed w-full h-20 ${
              navShadow ? "shadow-xl" : ""
            } z-[100] bg-[#0a192f] top-0 transition-all duration-500 font-mono`
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold px-4 text-[#64ffda] md:px-12 md:text-4xl"
        >
          Rith.
        </motion.p>
        <div className="px-2">
          <ol className="hidden md:flex items-center gap-6">
            <motion.li
              initial={{ opacity: 0, y: -75 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
              className={`${
                currentSection === 1 ? "text-[#64ffda]" : ""
              } text-sm hover:text-[#64ffda] cursor-pointer duration-300`}
              onClick={() => setCurrentSection(1)}
            >
              <Link href="/">
                <a>
                  <span className="text-[#64ffda]">01.</span> Home
                </a>
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -75 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              viewport={{ once: true }}
              className={`${
                currentSection === 2 ? "text-[#64ffda]" : ""
              } text-sm hover:text-[#64ffda] cursor-pointer duration-300`}
              onClick={() => setCurrentSection(2)}
            >
              <Link href="#about">
                <a>
                  <span className="text-[#64ffda]">02.</span> About
                </a>
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -75 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              viewport={{ once: true }}
              className={`${
                currentSection === 3 ? "text-[#64ffda]" : ""
              } text-sm hover:text-[#64ffda] cursor-pointer duration-300`}
              onClick={() => setCurrentSection(3)}
            >
              <Link href="#work">
                <a>
                  <span className="text-[#64ffda]">03.</span> Experience{" "}
                </a>
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -75 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              viewport={{ once: true }}
              className={`${
                currentSection === 4 ? "text-[#64ffda]" : ""
              } text-sm hover:text-[#64ffda] cursor-pointer duration-300`}
              onClick={() => setCurrentSection(4)}
            >
              <Link href="#project">
                <a>
                  <span className="text-[#64ffda]">04.</span> Projects
                </a>
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -75 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              viewport={{ once: true }}
              className={`${
                currentSection === 5 ? "text-[#64ffda]" : ""
              } text-sm hover:text-[#64ffda] cursor-pointer duration-300`}
              onClick={() => setCurrentSection(5)}
            >
              <Link href="#contact">
                <a>
                  <span className="text-[#64ffda]">05.</span> Contact
                </a>
              </Link>
            </motion.li>
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            viewport={{ once: true }}
            className="md:hidden "
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
      >
        <div
          className={
            nav
              ? "fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#112240] p-10 ease-linear duration-200"
              : "fixed right-[-100%] top-0 h-screen ease-linear duration-200"
          }
        >
          <div className="flex flex-col h-full">
            <AiOutlineClose
              onClick={handleNav}
              size={30}
              className="hover:cursor-pointer fill-[#64ffda] self-end"
            />
            <div className="grow flex flex-col items-center justify-center text-center text-lg md:text-2xl">
              <ol>
                <li
                  onClick={() => {
                    setCurrentSection(1);
                    handleNav();
                  }}
                  className={`${
                    currentSection === 1 ? "text-[#64ffda]" : ""
                  } hover:text-[#64ffda] mb-8 md:mb-12 cursor-pointer duration-300`}
                >
                  <Link href="/">
                    <a>
                      <span className="text-[#64ffda] block">01.</span> Home{" "}
                    </a>
                  </Link>
                </li>
                <li
                  onClick={() => {
                    setCurrentSection(2);
                    handleNav();
                  }}
                  className={`${
                    currentSection === 2 ? "text-[#64ffda]" : ""
                  } hover:text-[#64ffda] mb-8 md:mb-12 cursor-pointer duration-300`}
                >
                  <Link href="#about">
                    <a>
                      <span className="text-[#64ffda] block">02.</span> About
                    </a>
                  </Link>
                </li>
                <li
                  onClick={() => {
                    setCurrentSection(3);
                    handleNav();
                  }}
                  className={`${
                    currentSection === 3 ? "text-[#64ffda]" : ""
                  } hover:text-[#64ffda] mb-8 md:mb-12 cursor-pointer duration-300`}
                >
                  <Link href="#work">
                    <a>
                      <span className="text-[#64ffda] block">03.</span>{" "}
                      Experience
                    </a>
                  </Link>
                </li>
                <li
                  onClick={() => {
                    setCurrentSection(4);
                    handleNav();
                  }}
                  className={`${
                    currentSection === 4 ? "text-[#64ffda]" : ""
                  } hover:text-[#64ffda] mb-8 md:mb-12 cursor-pointer duration-300`}
                >
                  <Link href="#project">
                    <a>
                      <span className="text-[#64ffda] block">04.</span> Projects
                    </a>
                  </Link>
                </li>
                <li
                  onClick={() => {
                    setCurrentSection(5);
                    handleNav();
                  }}
                  className={`${
                    currentSection === 5 ? "text-[#64ffda]" : ""
                  } hover:text-[#64ffda] mb-8 md:mb-12 cursor-pointer duration-300`}
                >
                  <Link href="#contact">
                    <a>
                      <span className="text-[#64ffda] block">05.</span> Contact
                    </a>
                  </Link>
                </li>
              </ol>
              <Link href="assets/sopagnarith-seam-cv.pdf">
                <button className="w-40 border border-[#64ffda] text-[#64ffda] hover:bg-[rgba(100,255,218,0.1)] duration-300">
                  Resume
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
