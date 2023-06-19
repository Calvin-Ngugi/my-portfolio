import { useEffect, useRef } from "react";
import About from "./About";
import Header from "./Header";
import TechStacks from "./TechStacks";
import { useAnimation } from "framer-motion";
import Projects from "./Projects";

const MainContainer = ({ isDark }: any) => {
  const divRef = useRef<Element | null>(null);
    const controls = useAnimation();
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            controls.start({ opacity: 1, y: 0 });
          }
        },
        { threshold: 0.5 } // Adjust this threshold value as per your needs
      );
      const current = divRef.current
      if (divRef.current) {
        observer.observe(current as Element);
      }

      return () => {
        observer.unobserve(current as Element);
      };
    }, [controls]);
    
  return (
    <div className="min-h-screen m-auto">
      <Header isDark={isDark} />
      <TechStacks />
      <About controls={controls} divRef={divRef} isDark={isDark} />
      <Projects isDark={isDark} />
    </div>
  );
};

export default MainContainer;
