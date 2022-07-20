import thesis from './thesis.png';
import fnc from './fnc.png';
import liambo from './liambo.png';

const projectData = [
    {
        title: 'Music-VAE-GAN',
        description: 'A project aiming to understand the underlying featues of musical genre using deep learning, this was the project I completed as my masters thesis. Using pytorch, an original model was designed combining recurrent Variational Autoencoder and Generative Adversarial Network architectures to transfer musical pieces involving up to 5 instruments between genres and generate original pieces within genres. The system works with music in MIDI format, and training data was gathered from various internet sources.',
        imgsource: thesis
    },
    {
        title: 'Fake News Challenge',
        description: 'This was completed as coursework for a Natural Language Processing coursework. The aim was to take a database of article headlines and bodies and categorise them as agreeing, disagreeing, discussing or unrelated. A range of approaches were developed and tested using pytorch and scikit, from traditional linear regression models to deep models such as Gated Recurrent Units and Transformers.',
        imgsource: fnc
    },
    {
        title: 'liambo.github.io',
        description: 'The website you are currently viewing! Built in react, this was my first serious foray into web development since building simple html websites for myself and friends as a teenager.',
        imgsource: liambo
    }
]

export default projectData