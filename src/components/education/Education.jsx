import React from 'react';
import './education.css';

const Education = () => {
  return (
    <div className='liambo__education'>
        <div className='liambo__education-title'>
            <h3>Durham University</h3>
            <p>2018-2022</p>
        </div>
        <p>MSci. in Maths and Computer Science, achieving a 2:1 final grade and completing the following modules.</p>
        <p className='liambo__education-modules'>First year:</p>
        <div className='liambo__education-modules_container'>
            <p>Calculus and Probability I</p>
            <p>Linear Algebra I</p>
            <p>Analysis I</p>
            <p>Computer Systems</p>
            <p>Algorithms and Data Structures</p>
            <p>Computational Thinking</p>
        </div>
        <p className='liambo__education-modules'>Second year:</p>
        <div className='liambo__education-modules_container'>
            <p>Complex Analysis II</p>
            <p>Probability II</p>
            <p>Geometric Topology II</p>
            <p>Analysis in Many Variables II</p>
            <p>Elementary Number Theory II</p>
            <p>Software Methodologies</p>
            <p>Programming Paradigms</p>
            <p>Networks and Systems</p>
        </div>
        <p className='liambo__education-modules'>Third year:</p>
        <div className='liambo__education-modules_container'>
            <p>Decision Theory III</p>
            <p>Operations Research III</p>
            <p>Cryptography and Codes III</p>
            <p>Deep Learning and Reinforcement Learning</p>
            <p>Multimedia and Game Development</p>
            <p>Project Preparation</p>
            <p>Recommender Systems</p>
            <p>Virtual and Augmented Reality</p>
        </div>
        <p className='liambo__education-modules'>Fourth year:</p>
        <div className='liambo__education-modules_container'>
            <p>Stochastic Processes IV</p>
            <p>Mathematical Finance IV</p>
            <p>Advanced Project</p>
            <p>Blockchain and Cryptocurrences</p>
            <p>Natural Language Processing</p>
        </div>
        <div className='liambo__education-title'>
            <h3>Kings College London Mathematics School</h3>
            <p>2016-2018</p>
        </div>
        <p>Achieved A*s in Maths, Further Maths and Physics at A2 and an A in Computer Science at AS.</p>
        <div className='liambo__education-title'>
            <h3>St. Martins Secondary School</h3>
            <p>2011-2016</p>
        </div>
        <p>5 A*s including Maths and English, 6 As and 1 B at GCSE.</p>
    </div>
  )
}

export default Education