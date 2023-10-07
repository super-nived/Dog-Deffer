import React, { useEffect, useState } from 'react';
import "./App.css"
import buttonClickSound from './assets/button-click.mp3'
import {BsStopCircle} from 'react-icons/bs'
import {AiOutlinePlayCircle} from 'react-icons/ai'
import {BsFillQuestionSquareFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';
function Home() {
  const [isPlaying, setIsPlaying] = useState(false); // Track sound playing state
  const [oscillator, setOscillator] = useState(null); // Track oscillator state

  // sound effect 
  const playButtonClickSound = () => {
    const audio = new Audio(buttonClickSound);
    audio.play();
  };


  const startAudioContext = () => {

   try {
        // Check if an oscillator is already created
        if (!oscillator) {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const newOscillator = audioContext.createOscillator();
            newOscillator.type = 'sine';
            newOscillator.frequency.setValueAtTime(20000, audioContext.currentTime);
            newOscillator.connect(audioContext.destination);
            newOscillator.start();
      
            setOscillator(newOscillator);
          }
   } catch (error) {
    console.log('error',error)
   }
  };

  const stopAudioContext = () => {
    try {
        if (oscillator) {

            oscillator.stop();
            setOscillator(null); // Reset oscillator state
          }
    } catch (error) {
        console.log(error,'error is refresh the page')
    }
  };



  return (
    <div className="ultrasonic-container">
      <nav className="navbar">
        <ul>
          <li><b>D</b><b>o</b><b>g</b><b>D</b><b>e</b><b>f</b><b>f</b><b>e</b><b>r</b></li>
        </ul>
       <Link to={'/about'}><BsFillQuestionSquareFill className='acitve-about-btn'></BsFillQuestionSquareFill></Link> 
      </nav>
      <div className="content">
        <div className='sound-indicator-title' >
          { isPlaying && <h1>
          <span>s</span>
          <span>o</span>
          <span>u</span>
          <span>n</span>
          <span>d</span>
          <span>-</span>
          <span>a</span>
          <span>c</span>
          <span>t</span>
          <span>i</span>
          <span>v</span>
          <span>a</span>
          <span>t</span>
          <span>e</span>
          <span>d</span>
        </h1>}
        
        </div>

        {!isPlaying ? <button className='start-button' onClick={() => { startAudioContext(); setIsPlaying(!isPlaying); playButtonClickSound(); }} ><span className='svg'><AiOutlinePlayCircle></AiOutlinePlayCircle></span></button> :
          <button className='close-button' onClick={() => { stopAudioContext(); setIsPlaying(!isPlaying); playButtonClickSound(); }}><span className='svg'><BsStopCircle></BsStopCircle></span></button>}

        {!isPlaying ? <div class="wave-container">
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
        </div> :

        <div class="wave-container-active">
        <div class="wave-active"></div>
        <div class="wave-active"></div>
        <div class="wave-active"></div>
        <div class="wave-active"></div>
        <div class="wave-active"></div>
        <div class="wave-active"></div>
        </div> 


  
        }
      </div>

      <footer className="footer">
        <p>&copy; 2023 DogDeffer@.openai.com</p>
      </footer>
    </div>
  );
}

export default Home;