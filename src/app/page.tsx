import About from "./Components/about";
import Contact from "./Components/contact";
import Experience from "./Components/experience";
import Header from "./Components/header";
import Hero from "./Components/hero";
import Projects from "./Components/projects";
import Skills from "./Components/skills";

export default function Home() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-scroll bg-background z-0">
      <Header />
      <section className="snap-center">
        <Hero />
      </section>
      <section className="snap-center">
        <About />
      </section>
      <section className="snap-center">
        <Experience />
      </section>
      <section className="snap-center">
        <Skills />
      </section>
      <section className="snap-start">
        <Projects />
      </section>
      <section className="snap-start">
        <Contact />
      </section>
    </main>
  );
}
