import { useEffect, useState } from 'react';
import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav";
import Socials from "../components/Socials";
import me from "../assets/me1.jpg";
import moon from "../assets/icons/moon-solid.svg";
import sun from "../assets/icons/sun-solid.svg";

const Home = () => {
  const [darkTheme, setDarkTheme] = useState(undefined);

  const handleToggle = (event) => {
    setDarkTheme(event.target.checked);
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
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
    console.log(root.style)
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    // Set initial darkmode to light
    setDarkTheme(initialColorValue === "dark");
  }, []);

  return (
    <>
      <div className="page-container">
        <div>
          <div className="sun-moon">
            {darkTheme === true ? (
              <Image src={moon} alt="moon" className="theme-moon" />
            ) : (
              <Image src={sun} alt="sun" className="theme-sun" />
            )}
          </div>
          <div>
            {darkTheme !== undefined && (
              <form action="#">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={darkTheme}
                    onChange={handleToggle}
                  />
                  <span className="slider"></span>
                </label>
              </form>
            )}
          </div>
        </div>
        <Nav darktheme={darkTheme} changetheme={handleToggle} />
        <main className="main">
          <div className="my-pic">
            <Image alt="me" src={me} />
          </div>
          <p>Hey Im Cory,</p>
          <p>
            lksjdf asljdf;als dfas ;lasd ajlfja;sldfj;a;sldfja;sldjkf;lasdfj
            fkjashdkjhgkjlhsadfgk alsdkjf;lasjdf;lkajsdf;lkjasdl;fkj
          </p>
        </main>
        <Socials />
      </div>
    </>
  );
};

export default Home;