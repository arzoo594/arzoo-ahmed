import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Journey from "@/components/journey/Journey";
import Education from "@/components/education/Education";
import ResumeCTA from "@/components/resume/ResumeCTA";
import Contact from "@/components/contact/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Education />
      <ResumeCTA />
      <Contact />
    </>
  );
}
