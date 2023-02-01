import {
  Experience,
  PageInfo,
  Project,
  Skill,
  Social,
} from "@/pages/api/typings";

import About from "./Components/about";
import Contact from "./Components/contact";
import WorkExperience from "./Components/experience";
import Header from "./Components/header";
import Hero from "./Components/hero";
import Projects from "./Components/projects";
import Skills from "./Components/skills";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience;
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

export default function Home() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-scroll bg-background z-0 scrollbar scrollbar-track-textColour scrollbar-thumb-menuColour">
      <Header />
      <section className="snap-center">
        <Hero />
      </section>
      <section className="snap-center" id="about">
        {/* @ts-expect-error Server Component */}
        <About />
      </section>
      <section className="snap-center" id="experience">
        {/* @ts-expect-error Server Component */}
        <WorkExperience />
      </section>
      <section className="snap-center" id="skills">
        {/* @ts-expect-error Server Component */}
        <Skills />
      </section>
      <section className="snap-start" id="projects">
        {/* @ts-expect-error Server Component */}
        <Projects />
      </section>
      <section className="snap-start" id="contact">
        <Contact />
      </section>
    </main>
  );
}
