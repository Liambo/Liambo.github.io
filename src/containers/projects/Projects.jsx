import React from 'react'
import './projects.css'
import { Project } from '../../components'
import projectsData from '../../assets/projects-data'

const Projects = () => {
  return (
    <div className='liambo__projects section__padding'>
      <div className='liambo__projects-intro'>
        <p>All of my projects are uploaded to my github <a href='https://github.com/Liambo/' className='nav-link'>here</a>. Summaries of some personally significant projects are detailed below.</p>
      </div>
      <div className='liambo__projects-content'>
      {projectsData.map(project => (
        <Project key={project.title}
        title={project.title}
        description={project.description}
        imgsource={project.imgsource} />
      ))}
      </div>
    </div>
  )
}

export default Projects