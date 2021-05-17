import React from 'react';


const ProjectShowcase = ({
  headerImg,
  title,
  body,
  onClose,
}) => {
  return (
    <div className="project-showcase">
      <img src={headerImg} alt="app preivew" />
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  )
}

export default ProjectShowcase;