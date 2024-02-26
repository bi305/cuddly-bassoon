import Head from "next/head";
import { HeroParallax } from "@/components/ui/";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { products, projects, users } from "@/const";
import { TracingBeam } from "@/components/ui/tracing-beam";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bilal Raza Portfolio</title>

        <meta name="og:title" content="Bilal Raza Portfolio" />
        <meta
          name="og:description"
          content="Hi 👋🏻 I'm Bilal Raza  React Front-end dev"
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript , React.js , Next.js"
        />
        <meta name="author" content="Bilal Raza" />

        <meta property="og:type" content="website" />
        <meta property="og:image" content="../../profile2.JPG" />
        <meta property="og:url" content="URL_of_your_website_here" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar className="top-2" />
      <TracingBeam>
        <ContainerScroll users={users} titleComponent={<TitleComponent />} />
        <HeroParallax products={products} />
        <WorkExperience />
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
