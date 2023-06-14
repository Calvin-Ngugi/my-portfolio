import { BsToggle2On, BsToggle2Off } from "react-icons/bs";
import { BiMenuAltLeft } from "react-icons/bi";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = ({ setIsDark, isDark }: any) => {
  const [isMenu, setIsMenu] = useState(false);

  const handleClick = () => {
    setIsMenu(!isMenu);
  };

  return (
    <>
      {/* desktop */}
      <div className="hidden md:flex bg-inherit fixed justify-between w-[100%] m-auto pt-2 pb-2">
        <motion.ul
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className={`md:flex ms-10 mt-2 justify-between w-[300px] ${
            isDark ? `text-gray-300` : `text-gray-600`
          }`}
        >
          <li
            className={`cursor-pointer ${
              isDark ? `hover:text-white` : `hover:text-slate-900`
            }`}
          >
            Home
          </li>
          <li
            className={`cursor-pointer ${
              isDark ? `hover:text-white` : `hover:text-slate-900`
            }`}
          >
            About
          </li>
          <li
            className={`cursor-pointer ${
              isDark ? `hover:text-white` : `hover:text-slate-900`
            }`}
          >
            Projects
          </li>
          <li
            className={`cursor-pointer ${
              isDark ? `hover:text-white` : `hover:text-slate-900`
            }`}
          >
            Contact
          </li>
        </motion.ul>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -200 }}
          whileTap={{ scale: 0.8 }}
          className="me-10"
        >
          <button onClick={() => setIsDark(!isDark)}>
            {isDark ? (
              <BsToggle2On className="border-none w-[50px] h-7" />
            ) : (
              <BsToggle2Off className="border-none w-[50px] h-7" />
            )}
          </button>
        </motion.div>
      </div>
      {/* mobile */}
      <div className="bg-inherit fixed flex md:hidden justify-between w-[100%] m-auto pt-2">
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          whileTap={{ scale: 0.6 }}
          onClick={handleClick}
          className="md:hidden cursor-pointer ms-3"
        >
          <BiMenuAltLeft className="border-none w-[50px] h-8" />
        </motion.div>
        {isMenu && (
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className={`bg-inherit w-30 shadow-xl flex flex-col rounded-lg absolute top-10 left-1`}
          >
            <ul className="flex flex-col gap-5 px-8 py-2">
                <a hrefLang="#home">
                  <li
                    onClick={() => setIsMenu(false)}
                    className="duration-100 transition-all ease-in-out cursor-pointer"
                  >
                    Home
                  </li>
                </a>
                <a hrefLang="#about">
                  <li
                    onClick={() => setIsMenu(false)}
                    className="duration-100 transition-all ease-in-out cursor-pointer"
                  >
                    About
                  </li>
                </a>
                <a hrefLang="#projects">
                  <li
                    onClick={() => setIsMenu(false)}
                    className="duration-100 transition-all ease-in-out cursor-pointer"
                  >
                    Projects
                  </li>
                </a>
                <a hrefLang="#contact">
                  <li
                    onClick={() => setIsMenu(false)}
                    className="duration-100 transition-all ease-in-out cursor-pointer"
                  >
                    Contact
                  </li>
                </a>
              </ul>
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -200 }}
          whileTap={{ scale: 0.8 }}
          className="me-5"
        >
          <button onClick={() => setIsDark(!isDark)}>
            {isDark ? (
              <BsToggle2On className="border-none w-[50px] h-7" />
            ) : (
              <BsToggle2Off className="border-none w-[50px] h-7" />
            )}
          </button>
        </motion.div>
      </div>
    </>
  );
};

export default Navbar;
