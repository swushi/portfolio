/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import {
  SiLinkedin,
  SiGithub,
} from "react-icons/si";
import { GrMail } from 'react-icons/gr';
import { useEffect, useRef, useState } from "react";
import iprof_mockup from "./assets/iprof_mockup.png";
import avatar from "./assets/Portfolio_pic-removebg.png";
import ProjectItem from "./components/ProjectItem";
import SkillsList from "./components/SkillsList";


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

  const handleProjectClick = () => {
    console.log("WOOO")
  }

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
            <a href="mailto:samautrey7@gmail.com" className="hello">
              SAY HELLO
            </a>
          </div>
        </div>
      </header>
      <section>
        <div className="content">
          <h3 id="skills" >Skills</h3>
          <SkillsList />
        </div>
      </section>

      <section>
        <div className="content">
          <h3 id="projects">Projects</h3>
          <div className="projects">
            <ProjectItem 
              language="TypeScript" 
              title="react-native-input-outline" 
              body="A performant React Native TextInput with fully configurable options developed using Reanimated v2." 
              accolades
              onClick={handleProjectClick}
            />
            <ProjectItem 
              language="React-Native" 
              title="iProf" 
              body="A course and professor lookup tool for the University of North Texas." 
            />
            <ProjectItem 
              language="React-Native" 
              title="Accontable" 
              body="A social habit tracking mobile application." 
            />
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
