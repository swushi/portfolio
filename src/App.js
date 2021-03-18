/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import { FaGithub } from "react-icons/fa";
import { SiFirebase, SiReact, SiRedux, SiAmazonaws } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { useEffect, useRef, useState } from "react";
import accountable_mockup from "./accountable_mockup.png";
import iprof_mockup from "./iprof_mockup.png";
import avatar from "./avatar.jpg";

function App() {
  const [, setInnerHeight] = useState(window.innerHeight);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const height = useRef(window.innerHeight).current;

  function handleWindowSizeChange() {
    setInnerHeight(window.innerHeight);
    setInnerWidth(window.innerWidth);
    console.log("resize");
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = innerWidth <= 768;

  return (
    <div className="App">
      <header style={{ height: isMobile ? height : window.innerHeight }}>
        <a href="https://www.github.com/swushi">
          <FaGithub size={30} />
        </a>
        <div className="name">
          <img src={avatar} alt="alt" className="avatar" />
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

      <section>
        <div>
          <h2>Demonstrated Expertise</h2>
          <div className="split">
            <aside>
              <div>
                <span>1</span>
                <h3>Intuitive and Modern</h3>
              </div>
              <p>
                Delivering a product that is not only intuitive, but enjoyable
                to use is my top priority.
              </p>
            </aside>

            <aside>
              <div>
                <span>2</span>
                <h3>Quickly Implemented</h3>
              </div>
              <p>
                Using Facebook’s React-Native and modern day cloud
                infrastructure such as AWS or Google Cloud Services ensures a
                quick, successful, and scalable product.
              </p>
            </aside>
          </div>
          <img src={accountable_mockup} alt="a pic"></img>
          <img src={iprof_mockup} alt="a pic"></img>
        </div>
      </section>
    </div>
  );
}

export default App;
