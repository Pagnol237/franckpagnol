import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";


export default function Home() {
  return (
    <div>
      <Nav/>
      <Header/>
      <About/>
      <Services/>
      <Skills/>
      <Projects/>
    </div>
  );
}
