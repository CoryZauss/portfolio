import { useEffect, useState } from 'react';
import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav";
import Socials from "../components/Socials";
import me from "../assets/me1.jpg";
import moon from "../assets/icons/moon-solid.svg";
import sun from "../assets/icons/sun-solid.svg";

const Home = () => {


  return (
    <>
      <div className="page-container">

        <Nav  />
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