/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import { FaGithub, FaChevronDown } from "react-icons/fa";

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
            <div className="intro-text-wrapper">
              <div className="intro-title">Mobile Developer.</div>
              <div className="intro-bio">
                I'm a full-stack developer with a passion for intuitive design,
                world changing technologies, and open-source development.
              </div>
            </div>
            <div className="welcome-buttons-wrapper">
              <a href="#">Contact</a>
              <a href="#">
                See Resume <FaChevronDown />
              </a>
            </div>
          </div>
          <div className="skills">
            <FaGithub size={50} className="skill" />
            <FaGithub size={50} className="skill" />
            <FaGithub size={50} className="skill" />
            <FaGithub size={50} className="skill" />
            <FaGithub size={50} className="skill" />
          </div>
        </div>
      </main>
      <aside className="aside aside2" />
    </div>
  );
}

export default App;
