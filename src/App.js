//myportfolio mern
import React from 'react';
import { useState, useEffect } from 'react';
import './App.css'; // Import your styles
import containerImage from './images/sysadmin_03.png'; // Replace with your image path
import lightcontainerImage from './images/sysadmin_04.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSun,
  faMoon,
  faCode,
  faDatabase,
  faTools,
  faCloud,
  faFileCode,
  faCodeBranch,
} from '@fortawesome/free-solid-svg-icons';

import { faPython, faJs as faJsBrand } from '@fortawesome/free-brands-svg-icons'; // Import brand icons

import { faWindows, faLinux } from '@fortawesome/free-brands-svg-icons'; // Import brand icons

import {
  faWindows as faWindowsSolid, // Example solid icon for Windows
  faLinux as faLinuxSolid,       // Example solid icon for Linux
} from '@fortawesome/free-solid-svg-icons';


function App() {


  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    body.classList.toggle('dark-mode', darkMode);
    body.classList.toggle('light-mode', !darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    aboutSection.scrollIntoView({ behavior: 'smooth' });

  };

  const scrollToEducation = () => {

    const educationSection = document.getElementById('education-section');
    educationSection.scrollIntoView({ behavior: 'smooth' });
  
  };

  const scrollToSkills = () => {

    const skillsSection = document.getElementById('skills-section');
    skillsSection.scrollIntoView({ behavior: 'smooth' });
  
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  


  return (
    <div className="App">
      <div className="logo-container animate-left-to-right">
        <p className="logo-text">JG</p>
      </div>
      <div className="navigation-container animate-left-to-right">
      <button className="mode-toggle" onClick={toggleDarkMode}>
      <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
      </button>
        <button className="navigation-button">HOME</button>
        <button  onClick={scrollToAbout} className="navigation-button">ABOUT</button>
        <button  onClick = {scrollToEducation} className="navigation-button">EDUCATION</button>
        <button  onClick = {scrollToSkills} className="navigation-button">SKILLS</button>
      </div>
      <div className='container'>
      <p className="logo-text protest-riot-text">
          Hello,<br />
          I'm Jatin Gera <span className="typing-animation"></span>
        </p>
      <p className='logo-text protest-riot-subtext'>Current CS Student</p>
        <img src={darkMode ? containerImage : lightcontainerImage} alt="Container Image" className="container-image" />
        <a
        href={process.env.PUBLIC_URL + "/myresume.pdf"}
        target="_blank"
        rel="noopener noreferrer"
        className="resume-button"
      >
        See My Resume !
      </a>
      <a
        href="https://www.linkedin.com/in/jating378/"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-button"
      >
        See My LinkedIn Profile!
      </a>

      </div>
      <div className='about-me-container container' id="about-section">
        <h2 className='logo-text protest-riot-text about-me-heading'>
          About Me
        </h2>
        <p className='about-me-content'>
          Hello! I'm Jatin Gera, a 20-year-old pursuing a BSc in Computer Science at Coventry University, with an expected graduation in 2025. Hailing from the vibrant land of India, I am passionate about learning and adapting to new challenges in the ever-evolving field of technology.<br /><br />
          Currently immersed in my academic journey, I am driven by a curiosity to explore and master diverse aspects of computer science. Beyond the classroom, I am an enthusiastic learner, constantly seeking opportunities to enhance my skills and broaden my knowledge.<br /><br />
          I believe in the power of experience to shape one's understanding and perspective. Hence, I am actively seeking real-world experiences to complement my academic foundation. As I navigate through my educational path, my goal is not only to attain a degree but to cultivate a rich and practical understanding of the intricacies of computer science.<br /><br />
          In addition to my academic pursuits, I am eager to contribute to projects that align with my interests and goals. I am on a quest to gain hands-on experience, collaborate with like-minded individuals, and make a positive impact through technology.<br /><br />
          Let's connect and explore the exciting possibilities that the world of computer science has to offer!
        </p>
      </div>
      <div className='education-container container' id="education-section">
  <h2 className='education-heading'>
    Education
  </h2>
  <p className='education-content'>
    <strong>BSc. Computer Science</strong> <span className="education-dates">January 2022 - April 2025 (Expected)</span><br />
    Coventry University, United Kingdom

    <br /><br /><br></br>

    <strong>MSc. Applied Computer Science</strong> 
    <span className="education-dates"> October 2023 - July 2024</span><br />
    Placement Year / Study Abroad Year <br />
    Srh Hochschule, Heidelberg, Germany
  </p>
</div>
<div className='skills-container container' id = "skills-section">
<h2 className='skills-heading'>
     My Skills
  </h2>
  <ul className="skills-list">
          <li
          >
            <FontAwesomeIcon icon={faPython} className="skills-icon" />
            <strong>Programming Languages: </strong>Python,{' '}
            JavaScript
          </li>
          <li
          >
            <FontAwesomeIcon icon={faCode} className="skills-icon" />
            <strong>Web Development:</strong>Flask (Python), MERN Stack
            (MongoDB, Express.js, React, Node.js)
          </li>
          <li
          >
            <FontAwesomeIcon icon={faDatabase} className="skills-icon" />
            <strong>Database Management: </strong> SQL (SQLite), MySQL, MongoDB
          </li>
          <li
          >
            <FontAwesomeIcon icon={faTools} className="skills-icon" />
            <strong>Tools: </strong> RStudio, MATLAB, Assembly IDE, PyCharm, Visual Studio, Unity,
            Codio, Jupyter
          </li>
          <li
          >
            <FontAwesomeIcon icon={faCode} className="skills-icon" />
            <strong> Operating Systems:{' '} </strong>
            <FontAwesomeIcon icon={faWindows} className="skills-icon-os" />{' '}
            Windows,{' '}
            <FontAwesomeIcon icon={faLinux} className="skills-icon-os" />{' '}
            Linux
          </li>
          <li
  
          >
            <FontAwesomeIcon icon={faCloud} className="skills-icon" />
            <strong>Cloud: </strong>Google Cloud, AWS
          </li>
          <li
            
          >
            <FontAwesomeIcon icon={faFileCode} className="skills-icon" />
            <strong>Software Development Standards: </strong>Object-Oriented Programming (OOP),
            Scrum Methodology
          </li>
          <li
          >
            <FontAwesomeIcon icon={faCodeBranch} className="skills-icon" />
            <strong>Version Control: </strong>Git
          </li>
        </ul>
        <p className="skills-note">
          Actively exploring and gaining proficiency in 
          modern technologies for innovative and efficient web development.
        </p>
</div>
<button className="scroll-to-top" onClick={scrollToTop}>
        Scroll to Top
      </button>

     
    </div>
  );
}

export default App;
