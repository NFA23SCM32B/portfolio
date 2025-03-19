import React from 'react';
import profileImage from '../Assets/profileImage.png';


const Home = () => {
  return (
    <div className="FirstElement" id="home">
      <div className="profile-photo">
        <img src={profileImage} alt="Profile" width="100%" height="120%" />
      </div>
      <div className="profile-text">
        <h5>Hi, I'm</h5>
        <h1>Noyal Joseph Binu</h1>
        <p>
          Accomplished Full‑Stack & Front‑End Developer with over 4 years of industry experience. Currently pursuing my Master's in Computer Science at Illinois Tech.
        </p>
        <div className="btn-group">
          <a href="/Noyal_2025.pdf" className="btn active" target="_blank" rel="noreferrer">
            Download CV
          </a>
          <a href="mailto:noyaljosephbinu98@gmail.com" className="btn">Contact</a>
        </div>
        <div className="social">
          <a href="mailto:noyaljosephbinu98@gmail.com"><i className="fa fa-envelope"></i></a>
          <a href="https://github.com/sowndharnewbie"><i className="fa-brands fa-github"></i></a>
          <a href="https://leetcode.com/sowndharnewbie/"><i className="fa fa-code"></i></a>
          <a href="https://www.linkedin.com/in/noyal-joseph-binu/"><i className="fa-brands fa-linkedin"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Home;
