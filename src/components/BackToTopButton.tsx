import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-10 right-16 text-[30px] cursor-pointer transition-opacity ${isVisible ? "md:opacity-100 opacity-0" : "opacity-0"}`}
      onClick={scrollToTop}
    >
      <FaArrowCircleUp />
    </div>
  );
};

export default BackToTopButton;
