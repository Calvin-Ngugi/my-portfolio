import { BsToggle2On, BsToggle2Off } from "react-icons/bs";
import { BiMenuAltLeft } from "react-icons/bi";
import { motion } from "framer-motion";

const Navbar = ({ setIsDark, isDark }: any) => {
  return (
    <div className="flex justify-between w-[80%] m-auto pt-2">
      <motion.ul
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        className={`hidden md:flex ms-10 mt-2 justify-between w-[300px] ${isDark ? `text-gray-300` : `text-gray-600`}`}
      >
        <li className={`cursor-pointer ${isDark ? `hover:text-white` : `hover:text-slate-900`}`}>Home</li>
        <li className={`cursor-pointer ${isDark ? `hover:text-white` : `hover:text-slate-900`}`}>About</li>
        <li className={`cursor-pointer ${isDark ? `hover:text-white` : `hover:text-slate-900`}`}>Projects</li>
        <li className={`cursor-pointer ${isDark ? `hover:text-white` : `hover:text-slate-900`}`}>Contact</li>
      </motion.ul>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        whileTap={{ scale: 0.6 }}
        className="md:hidden cursor-pointer"
      >
        <BiMenuAltLeft className="border-none w-[50px] h-8" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -200 }}
        whileTap={{ scale: 0.5 }}
        className="me-5 md:me-10"
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
  );
};

export default Navbar;
