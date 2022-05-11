import Link from "next/link";
import Image from "next/image";
import moon from "../assets/icons/moon-solid.svg";
import sun from "../assets/icons/sun-solid.svg";
import { useEffect, useState } from "react";


export default function Nav({darktheme, changetheme}) {


  return (
    <div className="nav-container">
      <div className="sun-moon">
        {darktheme === true ? (
          <Image src={moon} alt="moon" className="theme-moon" />
        ) : (
          <Image src={sun} alt="sun" className="theme-sun" />
        )}
      </div>
      {darktheme !== '' && <form action="#">
        <label className="switch">
          <input type="checkbox" checked={darktheme} onChange={changetheme} />
          <span className="slider"></span>
        </label>
      </form>}

      <Link href="/">
        <a className="navlink">Home</a>
      </Link>
      <Link href="/about" style={{ textDecoration: "none" }}>
        <a className="navlink">About Me</a>
      </Link>

        <a className="navlink" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>

      <Link href="/projects">
        <a className="navlink">Projects</a>
      </Link>
    </div>
  );
}
