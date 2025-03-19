import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-details">
          <h4>Technical Skills</h4>
          <ul>
            <li>Languages: JavaScript (ES6+), TypeScript, HTML5, CSS3</li>
            <li>Frontend: React.js, Next.js, Angular, Vue.js</li>
            <li>State Management: Redux, Recoil, Zustand</li>
            <li>Backend & API: Node.js, Express.js, RESTful APIs, GraphQL, WebSockets</li>
            <li>UI/UX: Material UI, Tailwind CSS, Figma integration</li>
            <li>Build Tools: Webpack, Babel, Rollup, Gulp, Vite</li>
          </ul>
          <h4>Additional Skills</h4>
          <ul>
            <li>Software Architecture: Multi-tier, SSR, microservices</li>
            <li>Version Control & CI/CD: Git, GitHub Actions, Jenkins, Docker</li>
            <li>Agile Methodologies, Scrum, team leadership</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
