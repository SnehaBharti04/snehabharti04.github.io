// filepath: /src/sections/Hero.jsx
import { useTheme } from "../components/ThemeContext";
import { LinearGradient } from "react-text-gradients";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/youtube";
import "react-social-icons/github";
import "react-social-icons/linkedin";
import "react-social-icons/leetcode";
import MouseScroll from "../components/MouseScroll";
import { socialLinks } from "../constants/data";
import { motion } from "framer-motion";
import ThemeToggle from "../components/ThemeToggle";
import { useEffect, useState } from "react";

const Hero = () => {
  const { theme } = useTheme();
  const [waveTrigger, setWaveTrigger] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setWaveTrigger(true);
      setTimeout(() => setWaveTrigger(false), 1000);
    }, 4000); // Wave every 4 seconds.

    return () => clearInterval(interval);
  }, []);

  const textColorClass = theme === "light" ? "text-black" : "text-white";

  return (
    <section
      className="min-h-screen w-full flex flex-col relative items-center justify-center px-4"
      id="home"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-7 items-center">
        <ThemeToggle />
        <h2 className={`md:text-5xl sm:text-4xl text-2xl font-medium ${textColorClass} text-center`}>
          Hi, I am{" "}
          <LinearGradient gradient={["to left", "#374151 ,#f59e0b"]}>
            Sneha
          </LinearGradient>
        </h2>
        <h2
          className={`text-center xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-black !leading-normal relative w-[max-content]
before:absolute before:inset-0 before:animate-typewriter before:bg-${theme === "light" ? "[#1a191e]" : "[#1a191e]"}
after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-${theme === "light" ? "black" : "white"}`}
        >
          Software Developer
        </h2>
        <p className={`max-w-4xl text-center justify-center xl:text-xl md:text-lg sm:text-sm text-md ${textColorClass}`}>
          I&apos;m a full-stack developer specializing in web and android development using
          JavaScript, React, Node.js, TypeScript, MongoDB, and SQL. I craft interactive,
          user-focused experiences with clean, scalable code. Passionate about collaboration
          and continuous learning, I turn ideas into impactful digital solutions.
        </p>
      </div>
      <motion.div
        className="flex flex-row gap-4 justify-center mt-10 max-w-7xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {socialLinks.map((link, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            animate={
              waveTrigger
                ? {
                    y: [0, -10, 0],
                    transition: {
                      delay: index * 0.1,
                      duration: 0.6,
                      ease: "easeInOut",
                    },
                  }
                : {}
            }
          >
            <SocialIcon className="heroIcon" url={link.url} />
          </motion.div>
        ))}
      </motion.div>
      <div className="absolute bottom-5">
        <MouseScroll />
      </div>
    </section>
  );
};

export default Hero;