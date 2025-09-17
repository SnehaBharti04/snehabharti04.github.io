import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import MorphingBlob from "./components/StarField";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import { ThemeProvider } from "./components/ThemeContext";


export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <CursorGlow />
      <MorphingBlob />
    </ThemeProvider>
  );
}
