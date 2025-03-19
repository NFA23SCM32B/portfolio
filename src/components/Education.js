import React from 'react';

const Education = () => {
  return (
    <section id="education" className="education-content">
      <div className="container">
        <h2>Education</h2>
        <div className="education-details">
          <div className="edu-item">
            <h4>Master of Science in Computer Science</h4>
            <p><em>Illinois Institute of Technology, Chicago | Aug 2023 - May 2025</em></p>
            <p>Currently pursuing advanced coursework and research in computer science.</p>
          </div>
          <br></br>
          <div className="edu-item">
            <h4>Bachelor of Technology in Electrical and Electronics Engineering</h4>
            <p><em>APJ Abdul Kalam Technological University, Kochi, India | Aug 2016 - Sep 2020</em></p>
            <p>CGPA: 7.37. Thesis: "AI Based Prediction of Cardiac Diseases Using Phonocardiogram".</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
