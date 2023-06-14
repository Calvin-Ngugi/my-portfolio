import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const About = ({ controls, divRef }: any) => {
  const [isTruncated, setIsTruncated] = useState(true);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const text =
    "I'm a Full Stack Web Developer with experience building out both consumer and startup applications, including web and mobile applications with the latest technologies. I am also conversant with computer hardware management and networking.";
  const maxLines = 4;

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
    >
      <p className="font-bold text-center text-[32px] mb-8">About Me</p>
      <div className="h-[50%] grid grid-cols-1 sm:grid-cols-2 bg-blue-500 rounded-2xl mb-5">
        <div className="object-cover">
          <img
            src="https://lh3.googleusercontent.com/RMtbZs6s0lFReF1Jt7fJMFfbmSnlMr8PgeKbm0kf4GiSS7YuVbU6vz5FBiHDDhGd5IK1o7pyqY8Gyma56R6xJlNyS1LYkui8AXvmICLnPlkooAazKrY9oGampikCSUJw7y3eRxEu6fJjO2WoWFJ9CEqCH5MyD0CU5iFTuh8jpVuUKYqvG1hdxyrJh1lMrzcUMg8tPbEN1v_JOxeExY7FCHDnp1gxZpbNlyiTcfRDqufxhVlSKkFj8oFlLKm2Dop7toXXxVhwgQ12tTG8J3YWtshPMrGFQTOUhazTLFHC_5feysW4dLvTGtbCpPlpp0jP2a03kCVZErXIbvttdJ0yTK-ix_qNV4y0pTYzR33MCb07jQU3vZ9hgGIBmwUYNk8B7C8per5nTL7CFE_aFXTxYrthf_BllzcntAMijv_Zt8qIHqwvJUBXLfxI-9J6rGzxR4HSLAeBtEtYj4zOJZC9eJnc_6aaokc-xDVJevt0y4FFTY_cBw08MzAAS74uERNNdyzKA9HSC0abrx2jxaLUcLFhHQ0K8S1uDft6Xmgu49-nykUIagZXbkhco2HpZBzMdCkT3AzI0teiDeEkVJ21tMuT9FFWqZaF-exidhsorsqmudy1C5UbJ_BDVvQ4uY8-5Vz91KCYRCNXvb11LC2JzDeQPF3G3fzdXhq2QS1NT0OVXnXuYQEORbgYat4gVvKU4KHWC7WLYBY1yK9M-PN9Fb8lNabtU-J4Dse_GvcnJdTNkpI1s31x6sjWLxUoux7PzFw_2noCHqLUOufI4W3DbqcvmupMJnpHL81bb6oOt_WxRhtYfVEpIbqggWERHknpfF1iJo29AZgFy1KfKGG4wvwWZ8uY3xQGOzuAYGEXpH1KnvmyNiY082b3NClbeeiVgTX8z4FLNfMvGhXl9MFPH0QQ1ulICeB-IQFnUnoysfReKd-avIxqZIJwukkQtUYrNMnPu48Sy1yJGc6besdd7S8ZTd2RdE6P5C04qDhVIB7m3BvXdzS_vNQ19Fqa4Jbv1WzYNPi5E757i8C2lAZVOZ0NTEMc=w715-h954-s-no?authuser=0"
            alt="aboutPic"
            className="rounded-xl object-cover sm:rounded-none sm:rounded-s-2xl sm:mb-0 mb-5"
          />
        </div>
        <div className="m-auto">
          <p className="font-bold lg:text-[32px] text-[24px] sm:ms-5 sm:text-left text-center md:pe-5 sm:mb-3 mb-5">
            FullStack developer based in Kenya 📍
          </p>
          <p
            ref={paragraphRef}
            className={`lg:text-[18px] sm:ms-5 sm:text-left text-center md:pe-5 sm:mb-0 mb-5truncate ${
              isTruncated ? "cursor-pointer" : ""
            }`}
          >
            {isTruncated ? text.slice(0, maxLines * 50) + "..." : text}
          </p>
          {isTruncated && (
            <button
              className="hover:underline sm:ms-5 sm:text-left ms-4 font-semibold mt-2"
              onClick={toggleTruncate}
            >
              Read More
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
