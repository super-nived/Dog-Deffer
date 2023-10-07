import React from 'react'
import './App.css'
import {BiHome} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { BsFillQuestionSquareFill } from 'react-icons/bs'
function About() {
  return (
    <div  className="ultrasonic-container">
    <nav className="navbar">
      <ul>
        <li><b>D</b><b>o</b><b>g</b><b>D</b><b>e</b><b>f</b><b>f</b><b>e</b><b>r</b></li>

    
        <Link to={'/'}><BiHome className='acitve-about-btn'></BiHome></Link> 
      </ul>
   
    </nav>

    <div  className='about-container'>
    <div className='about'>
  <h4>About </h4>
  <p>
    Protect yourself from dog attacks with our innovative solution. Our website offers a safe and humane way to deter aggressive dogs using ultrasonic sound technology. Whether you're out for a walk or encountering an unfriendly dog, follow these steps to ensure your safety.
  </p>

  <h4>How to Use</h4>
  <ul>
    <li>
      Access the Website: Open the website on your mobile phone by typing the URL into your browser or using a QR code if available.
    </li>
    <li>
      Activate the Ultrasonic Sound: Once on the website's homepage, locate and press the "Activate Ultrasonic Sound" button. This will enable the ultrasonic sound emission feature.
    </li>
    <li>
      Keep Your Phone Ready: Ensure your mobile phone is readily accessible and within your reach whenever you're outdoors.
    </li>
    <li>
      Encounter an Aggressive Dog: In the unfortunate event of encountering an aggressive dog, stay as calm as possible. Avoid making sudden movements or loud noises that may provoke the dog further.
    </li>
    <li>
      Point Your Phone: Aim your mobile phone in the direction of the aggressive dog, keeping a safe distance at all times. The ultrasonic sound waves are emitted from your phone's speaker, so ensure it's facing the dog.
    </li>
    <li>
      Activate the Sound: Press the "Activate Sound" button on the website. The ultrasonic sound will be emitted at a frequency that is uncomfortable for most dogs, encouraging them to move away.
    </li>
    <li>
      Monitor the Dog's Reaction: Pay close attention to the dog's response. Most dogs will react by becoming visibly uncomfortable and may start to move away from the sound source. Keep your distance and avoid approaching the dog until it has retreated.
    </li>
    <li>
      Stay Safe: Always prioritize your safety. If the dog doesn't respond to the ultrasonic sound or continues to be aggressive, take additional measures such as seeking help from nearby authorities, animal control, or a professional dog handler.
    </li>
    <li>
      Report the Incident: After a dog encounter, consider reporting the incident to local animal control or authorities, especially if the dog poses a danger to the community.
    </li>
    <li>
      Share Your Experience: If the ultrasonic sound effectively deterred an aggressive dog, consider sharing your experience with others. Your feedback can help promote the responsible use of this technology to ensure everyone's safety.
    </li>
  </ul>

  <p>
    Remember, while this technology can be a valuable tool for deterring dog attacks, it's not foolproof, and results may vary depending on the dog's temperament and other factors. Always exercise caution and prioritize safety when dealing with aggressive dogs.
  </p>
</div>

    </div>
    <footer className="footer">
    <p>&copy; 2023 DogDeffer@.openai.com</p>
    </footer>
  </div>
  )
}

export default About