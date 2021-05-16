/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import { FaStar, FaCloudDownloadAlt, FaMailBulk } from "react-icons/fa";
import {
  SiFirebase,
  SiReact,
  SiRedux,
  SiAmazonaws,
  SiLinkedin,
  SiGithub,
  SiTypescript,
  SiGraphql,
} from "react-icons/si";
import { GrMail } from 'react-icons/gr';
import { DiDatabase, DiGoogleCloudPlatform } from "react-icons/di";
import { useEffect, useRef, useState } from "react";
import accountable_mockup from "./accountable_mockup.png";
import iprof_mockup from "./iprof_mockup.png";
import avatar from "./Portfolio_pic-removebg.png";

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
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
        <div className="avatar">
          <img src={avatar} alt="Sam" />
        </div>
        <navbar>
          <h6><a href="#skills">Skills</a></h6>
          <h6><a href="#projects">Projects</a></h6>
          <h6>Resume</h6>
        </navbar>
        <div className="content">
          <div className="top">
            <h2>Hi, I'm Sam Autrey</h2>
          </div>
          <div className="bottom">
            <h1>Mobile and Web Developer</h1>
            <p>
              Self-taught, full-stack developer with a passion for fluid design,
              world changing technologies, and open-source development with
              great experience with web and mobile apps.
            </p>
            <a href="#" className="hello">
              SAY HELLO
            </a>
          </div>
        </div>
      </header>
      <section>
        <div className="content">
          <h3 id="skills" >Skills</h3>
          <div className="skills">
            <div className="skill">
              <SiReact size={50} />
              <p>React-Native</p>
            </div>
            <div className="skill">
              <SiTypescript size={50} />
              <p>TypeScript</p>
            </div>
            <div className="skill">
              <DiGoogleCloudPlatform size={50} />
              <p>Google Cloud</p>
            </div>
            <div className="skill">
              <SiAmazonaws size={50} />
              <p>AWS</p>
            </div>
            <div className="skill">
              <SiReact size={50} />
              <p>ReactJS</p>
            </div>
            <div className="skill">
              <SiRedux size={50} />
              <p>Redux</p>
            </div>
            <div className="skill">
              <SiGraphql size={50} />
              <p>GraphQL</p>
            </div>
            <div className="skill">
              <DiDatabase size={50} />
              <p>NoSQL</p>
            </div>
            <div className="skill">
              <SiFirebase size={50} />
              <p>Firebase</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="content">
          <h3 id="projects">Projects</h3>
          <div className="projects">
            <div className="project">
              <div className="language">TypeScript</div>
              <h4>react-native-input-outline</h4>
              <p>A performant React Native TextInput with fully configurable options developed using Reanimated v2.</p>
              <div className="accolade">
                <FaStar size={20} className="accolade-icon"/>
                <span>78</span>
              </div>
              <div className="accolade">
                <FaCloudDownloadAlt size={20} className="accolade-icon"/>
                <span>500 Weekly Downloads</span>
              </div>
            </div>
            <div className="project">
            <div className="language">React-Native</div>
              <h4>Accountable</h4>
              <p>A social habit tracking mobile application.</p>
            </div>
            <div className="project">
            <div className="language">React-Native</div>
              <h4>iProf</h4>
              <p>A course and professor lookup tool for the University of North Texas.</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <SiGithub size={40} />
        <SiLinkedin size={40} />
        <GrMail size={40} />
      </footer>
    </div>
  );
}

export default App;
