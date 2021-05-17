import React from 'react';

import {
  SiFirebase,
  SiReact,
  SiRedux,
  SiAmazonaws,
  SiTypescript,
  SiGraphql,
} from "react-icons/si";

import { DiDatabase, DiGoogleCloudPlatform } from "react-icons/di";

const SkillsList = () => {
  return (
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
  );
}

export default SkillsList;