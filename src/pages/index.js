import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav";
import Socials from "../components/Socials";


export default function Home() {


  return (
    <div className="page-container">
      <Nav  />
      <main className="main">stuff</main>
      <Socials />
    </div>
  );
}
