/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import { FaGithub } from "react-icons/fa";
import { SiFirebase, SiReact, SiRedux, SiAmazonaws } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { useEffect, useRef } from "react";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function App() {
  const skillsRef = useRef(null);
  useEffect(() => {
    animateIcons();
  }, []);

  const animateIcons = async () => {
    const children = skillsRef.current.children;
    for (let child of children) {
      child.classList.toggle("showing");
      await delay(100);
    }
  };

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
          <div className="skills" ref={skillsRef}>
            <SiReact size={50} className="skill" />
            <SiFirebase size={50} className="skill" />
            <DiJavascript1 size={65} className="skill" />
            <SiRedux size={50} className="skill" />
            <SiAmazonaws size={65} className="skill" />
          </div>
        </div>
        <section className="offwhite">
          <div className="title primary">Demonstrated Expertise</div>
          <div className="explain-wrapper">
            <aside className="explain-col">
              <div className="explain-header">Intuitive and Modern</div>
              <div className="explain-body">
                Delivering a product that is not only intuitive, but enjoyable
                to use is my top priority.
              </div>
            </aside>
            <aside className="explain-col">
              <div className="explain-header two">Quickly Implemented</div>
              <div className="explain-body">
                Using Facebook’s React-Native and modern day cloud
                infrastructure such as AWS or Google Cloud Services ensures a
                quick, successful, and scalable product.
              </div>
            </aside>
          </div>
        </section>
      </main>
      <aside className="aside aside2" />
    </div>
  );
}

export default App;
