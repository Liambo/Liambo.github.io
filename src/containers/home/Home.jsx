import React from 'react';
import './home.css';
import headshot from '../../assets/headshot.jpg'


const Home = () => {
  return (
    <div className='liambo__home section__padding' id='home'>
      <div className='liambo__home-content'>
        <h1>Hello!</h1>
        <p>I'm Liam, a machine learning enthusiast and Maths and Computer Science graduate from Durham University. My main areas of interest include using deep learning models and AI in art, displayed by my masters thesis, MIDI-VAE-GAN: A system which learns unique characteristics of different music genres to generate original pieces.</p>
        <p>This website contains information about various projects I have undertaken or am currently undertaking in my free time, along with information about past and present jobs and experience.</p>
      </div>
      <div className='liambo__home-headshot'>
        <img src={headshot} alt='headshot'/>
      </div>
    </div>
  )
}

export default Home