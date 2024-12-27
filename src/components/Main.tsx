import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profile from '../assets/images/profile.jpg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profile} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/fayeapistar" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/hayah-faye-apistar-191826343/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Hayah Faye Apistar</h1>
          <p>Computer Science Student</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/fayeapistar" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/hayah-faye-apistar-191826343/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;