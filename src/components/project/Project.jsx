import React from 'react';
import './project.css';

const Project = ({title, description, imgsource}) => {
  return (
    <div className='liambo__project'>
      <div className='liambo__project-content'>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className='liambo__project-img'>
        <img src={imgsource} alt='project'/>
      </div>
    </div>
  )
}

export default Project