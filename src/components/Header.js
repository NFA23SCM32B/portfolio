import React from 'react';
import profileImage from '../Assets/profileImage.png';
import initials from '../Assets/initials.webp';

const Header = () => {
  return (
    <header className="header-area">
      <div className="container">
        <div className="header">
          <a href="#home" className="logo">
            <img src={initials} alt="Signature" className="signature" width='100%' height='100%' />
            <i className="fa fa-bolt"></i>
          </a>
          <ul className="navbar">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#career">Career</a></li>  {/* Scroll to Career section */}
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="menu_icon">
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
