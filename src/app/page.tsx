import { About } from "@/components/sections/About";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Publications } from "@/components/sections/Publications";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Publications />
      <Achievements />
      <Contact />
    </main>
  );
}
