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

  const [darkTheme, setDarkTheme] = useState('');

  const handleToggle = (event) => {
    setDarkTheme(event.target.checked);
  };

  useEffect(() => {
    if (darkTheme !== '') {
      if (darkTheme) {
        // Set value of  darkmode to dark
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        // Set value of  darkmode to light
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    // Set initial darkmode to light
    setDarkTheme(initialColorValue === "dark");
  }, []);
  return (
    <>
      <div className="page-container">
        {drawerOpen && <BackDrop toggle={toggleDrawer} /> }
        <div className="burger">
          <DrawerToggle toggle={toggleDrawer}/>
        </div>
        {drawerOpen && <SideDrawer toggle={toggleDrawer} darktheme={darkTheme} changetheme={ handleToggle}/> }

        <div className="navbar">
          <Nav darktheme={darkTheme} changetheme={handleToggle}/>
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
