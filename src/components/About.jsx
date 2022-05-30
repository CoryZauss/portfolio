// import Head from "next/head";
// import Image from "next/image";
import Nav from "../components/Nav";

export default function About() {
  const aboutMe = ` I began my coding journey a couple months after the beginning of the pandemic when a friend introduced me to JavaScript and gave me some resources to check out.
  I became immersed pretty quickly and loved the feeling of figuring out new problems and concepts. After a couple months of learning I made the decision to pursue programming professionally and applied to the software engineering immersive program, Hack Reactor at Galvonize.
  This program skipped the deep end and threw me into the middle of an ocean to learn how to swim. With over 800 hours of coding, learning and working on projects in a 14 week span, I gained a wealth of experience in JavaScript, React, Node and Express. Databases in SQL and noSQL.
  Developer tools like Git and testing libraries.
  As well as some practice deploying to AWS and containerizing using Docker.
  Now I continue my pursuit of knowledge and strive to improve as a developer.
  `;

  return (
    <div className="about-page">
      <div>About Me</div>
      <p >{aboutMe}</p>
    </div>
  );
}
