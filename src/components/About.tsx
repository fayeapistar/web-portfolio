import React from "react"; 
import '@fortawesome/free-regular-svg-icons';
import '../assets/styles/About.scss';

function About() {
  return (
    <div id="about">
      <div className="about-container">
        <h1>About Me</h1>
        <p>
          Hello! I'm a passionate developer working on innovative web applications.
        </p>
        <div className="vertical-about">
          <div className="vertical-item">
            <div>
              <h3>Education</h3>
              <h4>Currently a Junior Computer Science Student at the University of Science and Technology of Southern Philippines.</h4>
              <span>2022 - Present</span>
            </div>
          </div>
          <div className="vertical-item">
            <div>
              <h3>Achievements</h3>
              <h4>Dean's Lister, 1nd semester</h4>
              <span>2022-2023</span>
              <h4>Dean's Lister, 1st semester</h4>
              <span>2023-2024</span>
              <h4>Dean's Lister, 2nd semester</h4>
              <span>2023-2024</span>
            </div>
          </div>
          <div className="vertical-item">
            <div>
              <h3>Skills</h3>
              <h4>HTML</h4>
              <h4>Javascript</h4>
              <h4>Java</h4>
              <h4>Python</h4>
              <h4>React</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
