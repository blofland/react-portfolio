import React from 'react';


function Resume() {
  return (
  <div>
      <h1>Download Resume</h1>
      <a href="/documents/resume.pdf" download>Resume Download</a>
     <div> Proficient at:
    
      <ul className="rlist"><li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
      <li>Node.js</li></ul></div>
  </div>
  );
}
export default Resume;