import React from 'react';
import accountable_mockup from "../assets/accountable_mockup.png";
import { FaStar, FaCloudDownloadAlt, FaMailBulk } from "react-icons/fa";

const ProjectItem = ({
  language,
  title,
  body,
  accolades,
  onClick
}) => {
  console.log('render proj item')
  return (
    <div className="project" onClick={() => console.log("WHAT")} >
      <div className="language">{language}</div>
      <h4>{title}</h4>
      <p>{body}</p>
      {accolades &&
        <div className="accolade">
          <FaStar size={20} className="accolade-icon" />
          <span>78</span>
        </div>
      }

      {accolades &&
        <div className="accolade">
          <FaCloudDownloadAlt size={20} className="accolade-icon" />
          <span>500 Weekly Downloads</span>
        </div>
      }

      <div className="project-showcase">
        {/* <img src={accountable_mockup} alt="accountable app preview" /> */}

      </div>
    </div>
  );
}

export default ProjectItem