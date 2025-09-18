import { LinearGradient } from "react-text-gradients";
import { motion } from "framer-motion";
import { skillCategories, tabCategories } from "../constants/data";
import { useState } from "react";
import { useTheme } from "../components/ThemeContext";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");
  const { theme } = useTheme();

  const isLight = theme === "light";
  const lightCardColor = "rgb(208, 201, 201)";
  const darkCardColor = "#32303a";

  // Get skills based on active tab
  const getSkillsToShow = () => {
    if (activeTab === "all") {
      return [
        ...skillCategories.frontend,
        ...skillCategories.backend,
        ...skillCategories.others,
      ];
    }
    return skillCategories[activeTab] || [];
  };

  const skillsToShow = getSkillsToShow();

  return (
      <section className="w-full flex justify-center px-4 py-10" id="skills">
        <div className="flex flex-col w-full max-w-7xl items-center justify-start">
          <div className="w-full">
            <motion.h2
              className="mb-6 xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-black !leading-normal"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <LinearGradient gradient={["to left", "#374151 ,#f59e0b"]}>
                Skills & Technologies
              </LinearGradient>
            </motion.h2>
          </div>
          
          {/* Tab Navigation */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {tabCategories.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-[#374151] to-[#f59e0b] text-white shadow-lg"
                    : isLight
                    ? "bg-[rgb(208,201,201)] text-gray-800 hover:bg-yellow-200"
                    : "bg-[#32303a] text-gray-300 hover:bg-[#3a3840] hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </motion.button>
            ))}
          </motion.div>
          
          {/* Skills Grid */}
          <motion.div 
            className="relative w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
            key={activeTab} // This will trigger re-animation when tab changes
          >
            {skillsToShow.map((skill, index) => (
              <motion.div
                key={`${activeTab}-${skill.name}-${index}`}
                className="relative group"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  delay: index * 0.05,
                  ease: "easeOut" 
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1, 
                  rotateY: 10,
                  z: 50 
                }}
              >
                <div className="bg-gradient-to-br from-[#374151] to-[#f59e0b] p-[1px] rounded-xl">
                  <div className="bg-[#32303a] rounded-xl p-4 h-full flex flex-col items-center justify-center min-h-[100px] gap-2"
                    style={{
                      backgroundColor: isLight ? lightCardColor : darkCardColor,
                    }}>
                    {/* Skill Icon */}
                    <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                      <img 
                        src={skill.icon} 
                        alt={skill.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          // Fallback if icon doesn't exist
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    {/* Skill Name */}
                    <span
                      className={`text-xs sm:text-sm font-medium text-center ${
                        isLight ? "text-black" : "text-white"
                      }`}
                    >
                      {skill.name}
                    </span>
                  </div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#374151]/30 to-[#f59e0b]/30 rounded-xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300 -z-10" />
              </motion.div>
            ))}
          </motion.div>

          {/* Skills count indicator */}
          <motion.p
            className="text-gray-400 text-sm mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Showing {skillsToShow.length} {activeTab === "all" ? "skills" : `${activeTab} skills`}
          </motion.p>
        </div>
      </section>
  );
};

export default Skills;