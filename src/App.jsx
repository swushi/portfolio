/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import { FaGithub } from "react-icons/fa";
import {
  SiFirebase,
  SiReact,
  SiRedux,
  SiAmazonaws,
  SiLinkedin,
  SiGithub,
  SiNpm,
} from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
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
      <header style={{ height: window.innerHeight }}>
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="avatar"><img src={avatar} alt="Sam" /></div>
        <navbar>
          <h3>Skills</h3>
          <h3>Projects</h3>
          <h3>Resume</h3>
        </navbar>
        <div className="content">
          <div className="top">
            <h2>Hi, I'm Sam Autrey</h2>
          </div>
          <div className="bottom">
            <h1>Mobile and Web Developer</h1>
            <p>Self-taught, full-stack developer with a passion for fluid design, world changing technologies, and open-source development with great experience with web and mobile apps.</p>
            <a href="mailto:samautrey7@gmail.com" className="hello">SAY HELLO</a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
