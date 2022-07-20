import React from 'react';
import './cv.css';

const CV = () => {
  return (
    <div className='liambo__cv section__padding'>
      <div className='liambo__cv-content'>
        <div className='liambo__cv-content_intro'>
          <p>CV is available for download here. References are available upon request. Some additional information about education and experience is given below.</p>
        </div>
        <div className='liambo__cv-content_education'>
          <h2>Education</h2>
          <div className='liambo__cv-content_title'>
            <h3>Durham University</h3>
            <p>2018-2022</p>
          </div>
          <p>MSci. in Maths and Computer Science, achieving a 2:1 final grade and completing the following modules.</p>
          <p className='liambo__cv-content_modules'>First year:</p>
          <p>Calculus and Probability I &emsp; Linear Algebra I&emsp; Analysis I&emsp; Computer Systems &emsp; Algorithms and Data Structures &emsp; Computational Thinking</p>
          <p className='liambo__cv-content_modules'>Second year:</p>
          <p>Complex Analysis II&emsp;Probability II&emsp;Geometric Topology II&emsp;Analysis in Many Variables II&emsp;Elementary Number Theory II&emsp;Software Methodologies&emsp;Programming Paradigms&emsp;Networks and Systems</p>
          <p className='liambo__cv-content_modules'>Third year:</p>
          <p>Decision Theory III&emsp;Operations Research III&emsp;Cryptography and Codes III&emsp;Deep Learning and Reinforcement Learning&emsp;Multimedia and Game Development&emsp;PRoject Preparation&emsp;Recommender Systems&emsp;Virtual and Augmented Reality</p>
          <p className='liambo__cv-content_modules'>Fourth year:</p>
          <p>Stochastic Processes IV&emsp;Mathematical Finance IV&emsp;Advanced Project&emsp;Blockchain and Cryptocurrences&emsp;Natural Language Processing</p>
          <div className='liambo__cv-content_title'>
            <h3>Kings College London Mathematics School</h3>
            <p>2016-2018</p>
          </div>
          <p>Achieved A*s in Maths, Further Maths and Physics at A2 and an A in Computer Science at AS.</p>
          <div className='liambo__cv-content_title'>
            <h3>St. Martins Secondary School</h3>
            <p>2011-2016</p>
          </div>
          <p>5 A*s including Maths and English, 6 As and 1 B at GCSE.</p>
        </div>
        <div className='liambo__cv-content_experience'>
          <h2>Experience</h2>
        </div>
      </div>
    </div>
  )
}

export default CV