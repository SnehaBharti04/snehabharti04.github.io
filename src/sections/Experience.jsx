import { LinearGradient } from "react-text-gradients";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { workExperiences } from "../constants/data";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useTheme } from "../components/ThemeContext";

const ExperienceCard = ({ experience }) => {
  const { theme } = useTheme();

  const cardStyle =
    theme === "light"
      ? { background: "#fff", color: "#000" }
      : { background: "#32303a", color: "#fff" };

  const arrowStyle =
    theme === "light"
      ? { borderRight: "7px solid #fff" }
      : { borderRight: "7px solid #32303a" };

  const iconStyle =
    theme === "light"
      ? { background: "#fff", color: "#000" }
      : { background: "#32303a", color: "#fff" };

   const textColorClass = theme === "light" ? "text-black" : "text-white";   

  return (
    <VerticalTimelineElement
      contentStyle={cardStyle}
      contentArrowStyle={arrowStyle}
      date={experience.duration}
      dateClassName="text-white"
      iconStyle={iconStyle}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company}
            className="w-[100%] h-[100%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-base font-bold">{experience.position}</h3>
        <p className= {`${textColorClass} text-base font-mono`} style={{ margin: 0 }}>
          {experience.company}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {experience.technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-[#7e3ff2] text-white text-xs md:text-sm px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      {experience.projects && experience.projects.length > 0 && (
        <div className="mt-5">
          <h4 className={`text-sm ${textColorClass} font-semibold mb-2`}>Projects:</h4>
          <ul className="list-disc ml-5 space-y-1">
            {experience.projects.map((project, i) => (
              <li key={`project-${i}`} className={`${textColorClass} text-xs md:text-sm font-medium`}>
                {project.name}
                {project.description && (
                  <p className={`${textColorClass} text-xs md:text-sm font-normal mt-1`}>
                    {project.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { theme } = useTheme();

  return (
    <section className="w-full flex justify-center mb-20 px-4" id="experience">
      <div className="flex flex-col w-full max-w-7xl items-center justify-start">
        <div className="w-full">
          <motion.h2
            className="mb-10 xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-black !leading-normal"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <LinearGradient gradient={["to left", "#374151 ,#f59e0b"]}>
              Work Experience
            </LinearGradient>
          </motion.h2>
        </div>

        <VerticalTimeline lineColor={theme === "light" ? "#000" : "#fff"}>
          {workExperiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    duties: PropTypes.arrayOf(PropTypes.string),
    technologies: PropTypes.arrayOf(PropTypes.string),
    projects: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        link: PropTypes.string,
      })
    ),
  }).isRequired,
};