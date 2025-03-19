import React from 'react';

const Projects = () => {
  return (
    <section className="project-content" id="projects">
      <div className="container">
        <div className="project-title">
          <h4>My Projects</h4>
          <p>Explore these in-depth case studies that combine innovation and technical expertise.</p>
        </div>

        <div className="projects">
          {/* Project 1 */}
          <div className="project detailed-project">
            <i className="fa fa-chart-line"></i>
            <h4>Advanced Time Series Analysis for Repository Management</h4>
            <p className="project-duration"><em>Aug 2023 - Dec 2023</em></p>
            <ul className="project-details">
              <li>Developed time series forecasting models using <strong>TensorFlow/Keras LSTM</strong>, <strong>Facebook/Prophet</strong>, and <strong>StatsModels</strong>, increasing sales forecasting accuracy by <strong>15%</strong>.</li>
              <li>Analyzed <strong>Angular</strong> and <strong>OpenAI</strong> repositories to enhance issue tracking efficiency by <strong>20%</strong> through predictive analytics.</li>
              <li>Leveraged <strong>Python</strong> and <strong>Power BI</strong> for data analysis and visualization, enabling better insights into project performance.</li>
              <li>Collaborated with cross-functional teams to integrate forecasting outputs into existing CI/CD pipelines.</li>
            </ul>
          </div>

          {/* Project 2 */}
          <div className="project detailed-project">
            <i className="fa fa-dna"></i>
            <h4>Biomedical Image Segmentation using U-Net Architecture</h4>
            <p className="project-duration"><em>Aug 2024 - Dec 2024</em></p>
            <ul className="project-details">
              <li>Implemented advanced segmentation models using <strong>U-Net</strong> to address challenges in biomedical image analysis.</li>
              <li>Applied techniques such as <strong>stochastic gradient descent</strong>, <strong>elastic deformations</strong>, and <strong>weighted loss functions</strong> to enhance model accuracy.</li>
              <li>Focused on improving diagnosis, treatment planning, and enabling AI-driven medical research.</li>
              <li>Integrated with <strong>TensorFlow</strong> for efficient training, validation, and deployment on GPU clusters.</li>
            </ul>
          </div>

          {/* Project 3 */}
          <div className="project detailed-project">
            <i className="fa fa-mobile"></i>
            <h4>React Native Mobile App Revamp</h4>
            <p className="project-duration"><em>Jan 2024 - Apr 2024</em></p>
            <ul className="project-details">
              <li>Led a refactor of a FlutterFlow prototype to a fully developed <strong>React Native</strong> platform, improving performance by <strong>30%</strong>.</li>
              <li>Utilized <strong>Axios</strong> for seamless API integrations and data handling.</li>
              <li>Established a <strong>component-based design</strong> pattern to ensure maintainability and consistency.</li>
              <li>Deployed to both the App Store and Play Store, reducing go-to-market time by several weeks.</li>
            </ul>
          </div>

          {/* Project 4 */}
          <div className="project detailed-project">
            <i className="fa fa-heartbeat"></i>
            <h4>AI-Based Cardiac Disease Prediction via Phonocardiogram</h4>
            <p className="project-duration"><em>Jan 2020 - Jun 2020</em></p>
            <ul className="project-details">
              <li>Developed a hardware setup of <strong>phonocardiogram (PCG)</strong> and utilized AI models to predict cardiac diseases.</li>
              <li>Tested the system using real-world data from a selected community and additional data from PhysioNet.</li>
              <li>Published the research at the <strong>2020 International Conference on Futuristic Technologies in Control Systems &amp; Renewable Energy</strong>, supported by IEEE Kerala Section.</li>
              <li>Demonstrated potential for early-stage diagnosis and personalized treatment plans.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
