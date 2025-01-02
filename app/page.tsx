import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Temoignage from "./components/Temoignage";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div>
      <Nav/>
      <Header/>
      <About/>
      <Services/>
      <Skills/>
      <Projects/>
      <Temoignage/>
      <Footer/>
    </div>
  );
}
