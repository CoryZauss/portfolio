import Image from 'next/image'
import me from "../assets/me1.jpg";


export default function Hero() {
  return (
    <div className="home">
      <div className="my-pic">
        <Image alt="me" src={me} layout="intrinsic"/>
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
    </div>
  );
}
