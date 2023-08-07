import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BiDownload } from "react-icons/bi";

const About = ({ controls, divRef, isDark }: any) => {
  const [isTruncated, setIsTruncated] = useState(false);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const text =
    "I'm a Full Stack Web Developer with experience building out both consumer and startup applications, including web and mobile applications with the latest technologies. I am also conversant with computer hardware management and networking.";
  const maxLines = 3;

  useEffect(() => {
    const paragraphElement = paragraphRef.current;
    if (paragraphElement) {
      const lineHeight = parseFloat(
        getComputedStyle(paragraphElement).lineHeight
      );
      const maxHeight = lineHeight * maxLines;

      if (paragraphElement.clientHeight > maxHeight) {
        setIsTruncated(true);
      } else {
        setIsTruncated(false);
      }
    }
  }, [maxLines]);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };
  return (
    <motion.div
      ref={divRef}
      initial={{ opacity: 0, y: 200 }}
      animate={controls}
      transition={{ duration: 1 }}
      className="xl:w-[60%] w-[80%] md:w-[70%] flex flex-col justify-center pt-32 pb-5 opacity-0 m-auto"
      id="about"
    >
      <p className="font-bold text-center text-[32px] mb-8">About Me</p>
      <div className="h-[50%] grid grid-cols-1 sm:grid-cols-2 bg-blue-500 rounded-2xl mb-5">
        <div className="object-cover">
          <img
            src="me1.jpg"
            alt="aboutPic"
            className="rounded-xl object-cover sm:rounded-none sm:rounded-s-2xl sm:mb-0 mb-5"
          />
        </div>
        <div className="m-auto">
          <h2 className="font-bold lg:text-[32px] text-[24px] sm:ms-5 sm:text-left text-center md:pe-5 sm:mb-3 mb-5">
            FullStack developer based in Kenya 📍
          </h2>
          <p
            ref={paragraphRef}
            className={`lg:text-[18px] sm:ms-5 sm:text-left text-center md:pe-5 sm:mb-0 mb-5truncate ${
              isTruncated ? "cursor-pointer" : ""
            }`}
          >
            {isTruncated ? text.slice(0, maxLines * 40) + "..." : text}
          </p>
          {isTruncated ? (
            <button
              className="hover:underline sm:ms-6 w-[90%] sm:text-start ms-4 font-semibold mt-2"
              onClick={toggleTruncate}
            >
              Read More
            </button>
          ) : (
            <button
              className="hover:underline sm:ms-6 ms-4 w-[90%] sm:text-start font-semibold mt-2"
              onClick={toggleTruncate}
            >
              View Less
            </button>
          )}
          <button
            className={`ms-5 cursor-pointer flex items-center justify-center mt-7 ps-4 font-semibold mb-4 p-2 border-2 rounded-xl ${
              isDark
                ? `border-white hover:bg-slate-100 hover:text-slate-900 hover:font-semibold`
                : `border-black hover:bg-slate-900 hover:text-slate-100 hover:font-semibold`
            }`}
          >
            <a className="flex" href="CV-Calvin.pdf" download="Calvin's CV.pdf">
              Download CV
            <BiDownload className="ps-2 w-8 h-6" />
            </a>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
