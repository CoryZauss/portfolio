import Image from "next/image";
import me from "../assets/me1.png";

export default function Hero() {
  return (
    <div >

      <div className="my-pic">
        <Image alt="me" src={me} layout="intrinsic" />
      </div>
      <div className="about-section">
        <h1 className="about-name">Cory Zauss</h1>
        <li className="about-me">Passionate software engineer</li>
        <li className="about-me-2">Creative Thinker</li>
        <li className="about-me-3">Problem Solver</li>
      </div>
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        <button className="resume-button">View Resume</button>
      </a>
    </div>
  );
}
