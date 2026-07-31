import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Experience from "../components/Experience";

function Home() {
  return (
    <>
      {/* Animated Background */}
      <div className="bg-circle c1"></div>
      <div className="bg-circle c2"></div>
      <div className="bg-circle c3"></div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;