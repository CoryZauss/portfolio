import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";

import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Nav from "../components/Nav";
import SideDrawer from "../components/SideDrawer";
import Socials from "../components/Socials";
import DrawerToggle from "../components/DrawerToggle";
import BackDrop from "../components/BackDrop";

import moon from "../assets/icons/moon-solid.svg";
import sun from "../assets/icons/sun-solid.svg";

const Home = () => {
  const [currentComponent, setCurrentComponent] = useState("home");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [darkTheme, setDarkTheme] = useState("");

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };


  const handleToggle = (e) => {
    setDarkTheme(e.target.checked);
  };

  const toggleComp = (str) => {
    setCurrentComponent(str);
    if (drawerOpen) {
      setDrawerOpen(false)
    }
  }

  useEffect(() => {
    if (darkTheme !== "") {
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
        {drawerOpen && <BackDrop toggle={toggleDrawer} />}
        <div className="burger">
          <DrawerToggle toggle={toggleDrawer} />
        </div>
        {drawerOpen && (
          <SideDrawer
            toggle={toggleDrawer}
            darktheme={darkTheme}
            changetheme={handleToggle}
            changecomponent={toggleComp}
            current={currentComponent}
            />
            )}

        <div className="navbar">
          <Nav
            darktheme={darkTheme}
            changetheme={handleToggle}
            changecomponent={toggleComp}
            current={currentComponent}
          />
        </div>
        <main className="main">
          {currentComponent === 'home' && <Hero />}
          {currentComponent === 'projects' && <Projects />}
          {currentComponent === 'about' && <About />}
        </main>
        <Socials />
      </div>
    </>
  );
};

export default Home;
