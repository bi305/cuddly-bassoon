import { HeroParallax } from "@/app/components/ui";
import Navbar from "@/app/components/Navbar";
import Projects from "@/app/components/Projects";
import { ContainerScroll } from "@/app/components/ui/container-scroll-animation";
import { TracingBeam } from "@/app/components/ui/tracing-beam";
import WorkExperience from "@/app/components/WorkExperience";
import { products, projects, users } from "@/app/const";
import Tech from "./components/Tech";

export default function Home() {
  return (
    <>
      <Navbar className="top-2" />

      <TracingBeam>
        <ContainerScroll users={users} titleComponent={<TitleComponent />} />
        <HeroParallax products={products} />
        <WorkExperience />
        <Tech/>
        <Projects projects={projects} />
      </TracingBeam>
    </>
  );
}

const TitleComponent = () => {
  return (
    <h1 className="text-4xl font-semibold text-black dark:text-white">
      Hi 👋🏻 I&apos;m Bilal Raza <br />
      <span className="text-3xl md:text-[4rem] font-bold mt-1 leading-none">
        React Front-end dev
      </span>
    </h1>
  );
};
