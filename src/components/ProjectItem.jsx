import React from 'react';
import { FaStar, FaCloudDownloadAlt } from "react-icons/fa";

const ProjectItem = ({
  language,
  title,
  body,
  accolades,
  onClick
}) => {
  return (
    <div className="project" onClick={onClick} >
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
    </div>
  );
}

export default ProjectItem