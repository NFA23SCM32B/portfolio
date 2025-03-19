import React from 'react';

const Career = () => {
  return (
    <section id="career" className="career-section">
      <div className="container">
        <h2>Career</h2>

        {/* Work Experience in Descending Chronological Order */}
        <h3>Work Experience</h3>
        <div className="work-experience">

          {/* 1) Latest: BreatheIT (Oct 2024) */}
          <div className="experience-item">
            <h4>React Native Front-End Lead - BreatheIT Solutions Inc</h4>
            <p><em>Oct 2024 - Present</em></p>
            <ul>
              <li>Led a team of 8 developers in transitioning a mobile application from a FlutterFlow prototype to a fully developed React Native platform, significantly enhancing performance and maintainability.</li>
              <li>Implemented API integrations using Axios, reducing network latency and ensuring reliable data handling.</li>
              <li>Designed modular, reusable components that improved development speed by 30% and maintained consistency across the app.</li>
              <li>Deployed the new version to production on both the App Store and Play Store within 3 months, accelerating user adoption.</li>
              <li>Conducted rigorous code reviews and optimized performance, reducing load times by 30%.</li>
            </ul>
          </div>

          {/* 2) Next: Examiner at Chicago Public School (Sep 2024) */}
          <div className="experience-item">
            <h4>Examiner - Chicago Public School</h4>
            <p><em>Sep 2024 - Present</em></p>
            <ul>
              <li>Designing, administering, and evaluating academic assessments, ensuring integrity and fairness in testing processes.</li>
              <li>Collaborating with faculty and staff to refine test formats, schedules, and scoring metrics.</li>
              <li>Implementing data-driven strategies to track student performance and identify areas for improvement.</li>
              <li>Maintaining detailed records and documentation for compliance with district and state educational standards.</li>
            </ul>
          </div>

          {/* 3) Previous: TCS Full Stack (Oct 2022 - Jul 2023) */}
          <div className="experience-item">
            <h4>Full Stack Engineer - Tata Consultancy Services</h4>
            <p><em>Oct 2022 - Jul 2023</em></p>
            <ul>
              <li>Developed and optimized full‑stack applications using Node.js and React, focusing on seamless data handling and intuitive UI design.</li>
              <li>Implemented secure API integrations and managed PostgreSQL data storage on AWS, enhancing system security and data accessibility.</li>
              <li>Engineered responsive, modular components that improved overall user experience and application performance.</li>
              <li>Streamlined development through Agile methodologies and CI/CD pipelines, reducing deployment times.</li>
            </ul>
          </div>

          {/* 4) Oldest: TCS Front End (Oct 2020 - Oct 2022) */}
          <div className="experience-item">
            <h4>Front End Developer - Tata Consultancy Services</h4>
            <p><em>Oct 2020 - Oct 2022</em></p>
            <ul>
              <li>Spearheaded the development of data-driven web applications using Angular, HTML, CSS, TypeScript, JavaScript, and jQuery.</li>
              <li>Utilized project management tools such as Jira, Confluence, Git, and InVision to enhance collaboration and workflow efficiency.</li>
              <li>Developed accessible and responsive interfaces, elevating usability and customer satisfaction.</li>
              <li>Implemented performance enhancements that reduced load times and increased application scalability.</li>
            </ul>
          </div>
        </div>

        {/* Projects */}
        <h3>Projects</h3>
        <div className="projects-career">
          <div className="project-item">
            <h4>Advanced Time Series Analysis for Repository Management</h4>
            <p><em>Aug 2023 - Dec 2023</em></p>
            <ul>
              <li>Implemented sophisticated time series forecasting models using TensorFlow/Keras LSTM, Facebook/Prophet, and StatsModels; achieved a 15% increase in sales forecasting accuracy.</li>
              <li>Analyzed Angular and OpenAI repositories to enhance issue tracking efficiency by 20% through predictive analytics.</li>
              <li>Utilized Python and Power BI for detailed data analysis and visualization.</li>
            </ul>
          </div>
          <div className="project-item">
            <h4>Biomedical Image Segmentation using U-Net Architecture</h4>
            <p><em>Aug 2024 - Dec 2024</em></p>
            <ul>
              <li>Developed advanced segmentation models using U-Net to address challenges in biomedical image analysis.</li>
              <li>Applied techniques including stochastic gradient descent, elastic deformations, and weighted loss functions.</li>
              <li>Focused on improving diagnosis, treatment planning, and facilitating research in AI-based diagnostics.</li>
            </ul>
          </div>
        </div>

        {/* Publications */}
        <h3>Publications</h3>
        <div className="publications">
          <div className="publication-item">
            <h4>Artificial Intelligence Based Phonocardiogram Proposed for Cardiac Screening of School Children</h4>
            <p><em>IEEE Conference Publication, 2020</em></p>
          </div>
        </div>

        {/* Extracurricular & Leadership */}
        <h3>Extracurriculars & Leadership</h3>
        <div className="extracurriculars">
          <ul>
            <li>Chief Executive Officer – Innovation & Entrepreneurship Development Cell, MITS</li>
            <li>Treasurer – IEEE Student Branch, MITS</li>
            <li>Volunteer – National Service Scheme (NSS), participated in flood relief, blood donation campaigns, and community service projects</li>
            <li>Participation in robotics competitions and national-level line follower competitions</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Career;
