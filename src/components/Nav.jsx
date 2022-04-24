import Link from "next/link";


export default function Nav({ changetheme, darktheme }) {
  return (
    <div className="nav-container">
      <form action="#" style={{ width: "max-content" }}>
        <label className="switch">
          <input type="checkbox" checked= {darktheme} onChange={ changetheme }/>
          <span className="slider"></span>
        </label>
      </form>

      <Link href="/projects">
        <a className="navlink">About Me</a>
      </Link>
      <Link href="/projects">
        <a className="navlink">Resume</a>
      </Link>
      <Link href="/projects">
        <a className="navlink">???</a>
      </Link>
      <Link href="/projects">
        <a className="navlink">Projects</a>
      </Link>
    </div>
  );
}
