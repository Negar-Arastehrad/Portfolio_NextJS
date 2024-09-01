import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("./Components/Navbar"))
const Hero = dynamic(() => import("./Components/Hero"))
const About = dynamic(() => import("./Components/About"))
const Skills = dynamic(() => import("./Components/Skills"))
const Projects = dynamic(() => import("./Components/Projects"))
const Contact = dynamic(() => import("./Components/Contact"))

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
