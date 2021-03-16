/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import { FaGithub } from "react-icons/fa";
import { SiFirebase, SiReact, SiRedux, SiAmazonaws } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";

function App() {
  return (
    <div className="App">
      <aside className="aside aside1" />
      <main className="container">
        <div className="welcome">
          <a href="#" className="gh-icon">
            <FaGithub size={30} />
          </a>
          <div className="name-wrapper">
            <img
              src="https://source.unsplash.com/random/50x50"
              alt="alt"
              className="avatar"
            />
            <div className="name">Sam Autrey</div>
          </div>
          <div className="intro-wrapper">
            <div className="intro-title">Mobile Developer</div>
            <div className="intro-bio">
              I'm a full-stack developer with a passion for intuitive design,
              world changing technologies, and open-source development.
            </div>
            <div className="welcome-buttons-wrapper">
              <a href="#" className="contact">
                Contact
              </a>
              <a href="#" className="resume">
                See Resume
              </a>
            </div>
          </div>
          <div className="skills">
            <SiReact size={50} className="skill" />
            <SiFirebase size={50} className="skill" />
            <DiJavascript1 size={65} className="skill" />
            <SiRedux size={50} className="skill" />
            <SiAmazonaws size={65} className="skill" />
          </div>
        </div>
      </main>
      <aside className="aside aside2" />
    </div>
  );
}

export default App;
