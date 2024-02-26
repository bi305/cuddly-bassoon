import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { styles } from "@/styles";
import { motion } from "framer-motion";
import Image from "next/image";

import { fadeIn, textVariant } from "@/utils/motion";
import Link from "next/link";

interface Projects {
  projects: {
    name: string;
    description: string;
    image: string;
    link: string;
  }[];
}

const projects = ({ projects }: Projects) => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => {
            return (
              <CardContainer
                className="inter-var     min-w-72   "
                key={project?.name}
              >
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold   text-purple-500"
                  >
                    {project.name}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className={` text-sm max-w-sm mt-2   text-purple-300 ${
                      project.description.length > 300
                        ? "overflow-y-scroll  h-[7rem]"
                        : " overflow-hidden"
                    }  `}
                  >
                    {project.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={project?.image}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-end items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      <Link
                        href={(project?.link as string) || ""}
                        target="_blank"
                      >
                        Check out
                      </Link>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default projects;
