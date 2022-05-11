import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";

import Nav from "../components/Nav";
import SideDrawer from "../components/SideDrawer";
import Socials from "../components/Socials";
import DrawerToggle from "../components/DrawerToggle";
import BackDrop from "../components/BackDrop"

import me from "../assets/me1.jpg";
import moon from "../assets/icons/moon-solid.svg";
import sun from "../assets/icons/sun-solid.svg";

const Home = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  }

  return (
    <>
      <div className="page-container">
        {drawerOpen && <BackDrop toggle={toggleDrawer} /> }
        <div className="burger">
          <DrawerToggle toggle={toggleDrawer}/>
        </div>
        {drawerOpen && <SideDrawer toggle={toggleDrawer} /> }

        <div className="navbar">
          <Nav />
        </div>
        <main className="main">
          <div className="my-pic">
            <Image alt="me" src={me} />
          </div>
          <div className="about-section">
            <p>Hey Im Cory,</p>
            <li className="about-me">A passionate software engineer</li>
            <li className="about-me-2">Creative Thinker</li>
            <li className="about-me-3">Problem Solver</li>
          </div>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="resume-button">Resume</button>
          </a>
        </main>
        <Socials />
      </div>
    </>
  );
};

export default Home;
