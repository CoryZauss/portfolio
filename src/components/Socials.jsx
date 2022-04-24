import Link from "next/link";
import Image from "next/image";
import twitter from "../assets/icons/twitter.png";
import gmail from "../assets/icons/gmail.png";
import linked from "../assets/icons/linked.png";
import github from "../assets/icons/github.png";

export default function Socials() {
  return (
    <div className="socials">
      <a
        href="https://www.linkedin.com/in/coryzauss/"
        target="_blank"
        rel="noreferrer"
        className="icon"
      >
        <Image src={linked} alt="linkedin"  />
      </a>

      <a
        href="https://twitter.com/CoryZaussDev"
        target="_blank"
        rel="noreferrer"
        className="icon"
      >
        <Image src={twitter} alt="twitter" />
      </a>
      <a
        href="https://github.com/CoryZauss"
        target="_blank"
        rel="noreferrer"
        className="icon"
      >
        <Image src={github} alt="github" />
      </a>
      <a href="mailto: cory.zauss@gmail.com" rel="noreferrer" className="icon">
        <Image src={gmail} alt="gmail" />
      </a>
    </div>
  );
}
