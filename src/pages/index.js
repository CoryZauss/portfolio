import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav";
import Socials from "../components/Socials";
import { useEffect, useState } from "react";

export default function Home() {
  const [darkTheme, setDarkTheme] = useState("");

  const handleToggle = (e) => {
    setDarkTheme(e.target.checked);
  };

  useEffect(() => {
    if (darkTheme !== "") {
      if (darkTheme) {
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
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
    setDarkTheme(initialColorValue === "dark");
  }, []);

  return (
    <div>
      <Nav changetheme={handleToggle} darktheme={darkTheme} />
      <main className="main">stuff</main>
      <footer className="footer">
        <Socials />
      </footer>
    </div>
  );
}
