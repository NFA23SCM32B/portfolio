import React from 'react';

const About = () => {
  return (
    <section className="about-timeline" id="about">
      <div className="container">
        <h2>My Journey &amp; Skills</h2>
        <div className="timeline">
          {/* Most Recent: React Native Front-End Lead */}
          <div className="timeline-item">
            <div className="timeline-date">Oct 2024 - Present</div>
            <div className="timeline-content">
              <h4>React Native Front-End Lead – BreatheIT Solutions Inc</h4>
              <p>
                Leading a team of 8 developers to transform a FlutterFlow prototype into a full‑fledged React Native platform. I focus on advanced JavaScript, API integration with Axios, and modular design while applying agile methodologies.
              </p>
              <p>
                <strong>Key Skills:</strong> React Native, API Integration, Agile Leadership, Component-Based Design
              </p>
            </div>
          </div>
          {/* New Entry: Test Examiner */}
          <div className="timeline-item">
            <div className="timeline-date">Sep 2023 - Present</div>
            <div className="timeline-content">
              <h4>Test Examiner – Chicago Public School</h4>
              <p>
                Currently working as a Test Examiner, where I design, administer, and evaluate academic assessments. This role has sharpened my attention to detail, data analysis, and educational technology skills.
              </p>
              <p>
                <strong>Key Skills:</strong> Assessment Design, Data Analysis, Educational Technology, Communication
              </p>
            </div>
          </div>
          {/* Full Stack Engineer */}
          <div className="timeline-item">
            <div className="timeline-date">Oct 2022 - Jul 2023</div>
            <div className="timeline-content">
              <h4>Full Stack Engineer – Tata Consultancy Services</h4>
              <p>
                Developed robust full‑stack solutions with Node.js and React, implemented secure API integrations, managed PostgreSQL on AWS, and built responsive, modular components.
              </p>
              <p>
                <strong>Key Skills:</strong> Node.js, React, AWS, PostgreSQL, Agile Development
              </p>
            </div>
          </div>
          {/* Front End Developer */}
          <div className="timeline-item">
            <div className="timeline-date">Oct 2020 - Oct 2022</div>
            <div className="timeline-content">
              <h4>Front End Developer – Tata Consultancy Services</h4>
              <p>
                Spearheaded the development of data-driven web applications using Angular, HTML, CSS, TypeScript, and JavaScript, with a focus on responsive design and performance enhancements.
              </p>
              <p>
                <strong>Key Skills:</strong> Angular, HTML, CSS, TypeScript, JavaScript, Responsive Design
              </p>
            </div>
          </div>
          {/* College Days */}
          <div className="timeline-item">
            <div className="timeline-date">College Days</div>
            <div className="timeline-content">
              <h4>B-Tech in Electrical &amp; Electronics Engineering</h4>
              <p>
                At Muthoot Institute of Technology and Science, I laid the foundation of my technical expertise by engaging in robotics competitions, building custom computers, and taking leadership roles in initiatives like the Entrepreneurship Development Cell, IEEE Student Branch, and NSS.
              </p>
              <p>
                <strong>Key Skills:</strong> Robotics, Hardware &amp; Software Integration, Leadership, Problem-Solving
              </p>
            </div>
          </div>
          {/* Early Years */}
          <div className="timeline-item">
            <div className="timeline-date">Early Years</div>
            <div className="timeline-content">
              <h4>Passion for Technology</h4>
              <p>
                Growing up in Ernakulam, Kerala, I was captivated by the power of electricity and computing. This early curiosity led me to build customized computers and participate in tech competitions.
              </p>
              <p>
                <strong>Key Skills:</strong> Self-Learning, Curiosity, Early Programming Fundamentals
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
