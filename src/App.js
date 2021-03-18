/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import { FaGithub } from "react-icons/fa";
import { SiFirebase, SiReact, SiRedux, SiAmazonaws } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { useEffect, useRef, useState } from "react";

function App() {
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", (evt) => {
      setInnerHeight(window.innerHeight);
    });
  }, []);

  return (
    <div className="App">
      <header style={{ height: innerHeight }}>
        <a href="#">
          <FaGithub size={30} />
        </a>
        <div className="name">
          <img
            src="https://source.unsplash.com/random/50x50"
            alt="alt"
            className="avatar"
          />
          <h2 class="text-center">Sam Autrey</h2>
        </div>
        <div className="intro">
          <h1 class="text-center">Mobile and Web Developer</h1>
          <p class="text-center">
            I'm a full-stack developer with a passion for intuitive design,
            world changing technologies, and open-source development.
          </p>
          <div className="buttons">
            <a
              href="mailto:samautrey7@gmail.com"
              className="contact text-center"
            >
              Contact
            </a>
            <a href="#" className="resume text-center">
              See Resume
            </a>
          </div>
        </div>
        <div className="skills">
          <SiReact size={50} />
          <SiFirebase size={50} />
          <DiJavascript1 size={65} />
          <SiRedux size={50} />
          <SiAmazonaws size={65} />
        </div>
      </header>

      <section className="offwhite">
        <div className="bg bg-left offwhite" />
        <div className="title primary">Demonstrated Expertise</div>
        <div className="explain-wrapper">
          <aside className="explain-col">
            <div className="explain-header-wrapper">
              <div className="explain-number">1</div>
              <div className="explain-header">Intuitive and Modern</div>
            </div>
            <div className="explain-body">
              Delivering a product that is not only intuitive, but enjoyable to
              use is my top priority.
            </div>
          </aside>
          <aside className="explain-col">
            <div className="explain-header-wrapper">
              <div className="explain-number">1</div>
              <div className="explain-header two">Quickly Implemented</div>
            </div>
            <div className="explain-body">
              Using Facebook’s React-Native and modern day cloud infrastructure
              such as AWS or Google Cloud Services ensures a quick, successful,
              and scalable product.
            </div>
          </aside>
        </div>
      </section>
      <aside className="aside aside2" />
    </div>
  );
}

export default App;
