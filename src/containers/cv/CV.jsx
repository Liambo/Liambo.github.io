import React, { useState } from 'react';
import './cv.css';
import { RiAddLine, RiCloseLine} from 'react-icons/ri';
import { Education, Experience } from '../../components';

const CV = () => {
  const [toggleEducation, setToggleEducation] = useState(false);
  const [toggleExperience, setToggleExperience] = useState(false);

  return (
    <div className='liambo__cv section__padding'>
      <div className='liambo__cv-content'>
        <div className='liambo__cv-content_intro'>
          <p>CV is available for download <a href='Curriculum_Vitae.pdf' download className='download-link'>here</a>. References are available upon request. Some additional information about education and experience is given below.</p>
        </div>
        <div className='liambo__cv-content_education'>
          <div className='liambo__cv-content_education-header'>
            <h2>Education</h2>
            {toggleEducation
              ? <RiCloseLine color='#000' size={27} onClick={() => setToggleEducation(false)}/>
              : <RiAddLine color='#000' size={27} onClick={() => setToggleEducation(true)}/>
            }
          </div>
          {toggleEducation && (<Education/>)}
        </div>
        <div className='liambo__cv-content_experience'>
          <div className='liambo__cv-content_experience-header'>
            <h2>Experience</h2>
            {toggleExperience
              ? <RiCloseLine color='#000' size={27} onClick={() => setToggleExperience(false)}/>
              : <RiAddLine color='#000' size={27} onClick={() => setToggleExperience(true)}/>
            }
          </div>
          {toggleExperience && (<Experience/>)}
        </div>
      </div>
    </div>
  )
}

export default CV