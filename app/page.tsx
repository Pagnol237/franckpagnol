import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./components/Nav";
import Header from "./components/Header";


export default function Home() {
  return (
    <div>
      <Nav />
      <Header />
    </div>
  );
}
