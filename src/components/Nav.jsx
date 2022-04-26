import Link from "next/link";
import Image from "next/image";
import moon from "../assets/icons/moon-solid.svg";
import sun from "../assets/icons/sun-solid.svg";
import { useEffect, useState } from "react";

export default function Nav() {
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
    <div className="nav-container">
      <div className="sun-moon">
        {darkTheme === true ? (
          <Image src={moon} alt="moon" className="theme-moon" />
        ) : (
          <Image src={sun} alt="sun" className="theme-sun" />
        )}
      </div>
      <form action="#">
        <label className="switch">
          <input type="checkbox" checked={darkTheme} onChange={handleToggle} />
          <span className="slider"></span>
        </label>
      </form>

      <Link href="/">
        <a className="navlink">Home</a>
      </Link>
      <Link href="/projects" style={{ textDecoration: "none" }}>
        <a className="navlink">About Me</a>
      </Link>
      <Link href="/projects" style={{ textDecoration: "none" }}>
        <a className="navlink">Resume</a>
      </Link>
      <Link href="/projects">
        <a className="navlink">Projects</a>
      </Link>
    </div>
  );
}
