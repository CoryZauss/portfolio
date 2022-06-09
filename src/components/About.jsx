// import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav";
import reactIcon from "../assets/skill-icons/react.png";
import jsicon from "../assets/skill-icons/jsicon.png";
import nodeicon from "../assets/skill-icons/nodeicon.png";
import idk from "../assets/skill-icons/react.png";

export default function About() {
  return (
    <div className="about-page">
        <div className="about-title">Top Skils</div>
      <div className="top-skills">
        <div className="skills">
          <p>JavaScript</p>
          <div className="skills-icon">
            <Image src={jsicon} alt="react icon"></Image>
          </div>
        </div>
        <div>
          <p>React.js</p>
          <div className="skills-icon">
            <Image src={reactIcon} alt="react icon"></Image>
          </div>
        </div>
        <div>
          <p>Node.js</p>
          <div className="skills-icon">
            <Image src={nodeicon} alt="react icon"></Image>
          </div>
        </div>

      </div>
      <br></br>
      <div>
        <div className="about-title">About Me</div>
        <br></br>
        <p>{`I began my coding journey a couple months after the beginning of the pandemic when a friend introduced me to JavaScript and gave me some resources to check out.`}</p>
        <br></br>
        <p>{`I became immersed pretty quickly and loved the feeling of figuring out new problems and concepts. After a couple months of learning I made the decision to pursue programming professionally and applied to the software engineering immersive program, Hack Reactor at Galvonize.`}</p>
        <br></br>
        <p>{` This program skipped the deep end and threw me into the middle of an ocean to learn how to swim. With over 800 hours of coding, learning and working on projects in a 14 week span, I gained a wealth of experience in JavaScript, React, Node and Express. Databases in SQL and noSQL.
      Developer tools like Git and testing libraries.`}</p>
        <br></br>
        <p>{`Additionally I had some practice deploying to AWS and containerizing using Docker.
      Now I continue my pursuit of knowledge and strive to improve as a developer.`}</p>
        <br></br>
      </div>
    </div>
  );
}
