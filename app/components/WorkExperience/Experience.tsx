"use client";
import { experiences } from "@/app/const";
import { styles } from "@/app/styles";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Tech from "../Tech";
import ExperienceCard from "./ExperienceCard";
const workExperience = () => {
  return (
    <>
      <motion.div
        id="work"
        variants={{
          hidden: {
            y: -50,
            opacity: 0,
          },
          show: {
            y: 0,
            opacity: 1,
            transition: {
              type: "spring",
              duration: 1.25,
              delay: 2,
            },
          },
        }}
        className="my-10"
      >
        <p className={`${styles.sectionSubText}  `}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText} `}>Work Experience.</h2>
      </motion.div>
      <VerticalTimeline>
        {experiences.map((experience: any, index: any) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} />
        ))}
      </VerticalTimeline>
      {/* <Tech /> */}
    </>
  );
};

export default workExperience;


