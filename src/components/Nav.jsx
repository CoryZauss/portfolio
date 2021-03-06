
import Image from "next/image";
import moon from "../assets/icons/moon-solid.svg";
import sun from "../assets/icons/sun-solid.svg";
import { useEffect, useState } from "react";

export default function Nav({ darktheme, changetheme, changecomponent, current }) {

  return (
    <>
      <div className="nav-bg"></div>
    <div className="nav-container">
      <div className="sun-moon">
        {darktheme === true ? (
          <Image src={moon} alt="moon" className="theme-moon" />
        ) : (
          <Image src={sun} alt="sun" className="theme-sun" />
        )}
      </div>
      {darktheme !== "" && (
        <form action="#">
          <label className="switch">
            <input type="checkbox" checked={darktheme} onChange={changetheme} />
            <span className="slider"></span>
          </label>
        </form>
      )}
      <a
        className="navlink"
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>

      <a className={`navlink projects-link ${current === 'projects' && "current-page"}`} onClick={()=>changecomponent('projects')}>
        Projects
      </a>

      <a className={`navlink about-link ${current === 'about' && "current-page"}`} onClick={()=>changecomponent('about')}>About Me</a>


      <a className={`navlink home-link ${current === 'home' && "current-page"}`} onClick={()=>changecomponent('home')}>Home</a>
      </div>
      </>
  );
}
