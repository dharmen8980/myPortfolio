import "../page.scss";
import React from "react";

const Skills = () => {
  return (
    <div className="page" id="skills">
      <h1>Skills</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 sm:gap-6 md:gap-2">
        <div className="card">
          <h3 className="card-header">Frontend</h3>
          <ul className="card-body">
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Vue</li>
            <li>Angular</li>
            <li>Redux</li>
            <li>Material UI</li>
            <li>jQuery</li>
          </ul>
        </div>
        <div className="card" >
          <h3 className="card-header">Backend</h3>
          <ul className="card-body">
            <li>Node.js</li>
            <li>Express</li>
            <li>Django</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>mariaDB</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="card-header">Programming </h3>
          <ul className="card-body">
            <li>JavaScript</li>
            <li>Python</li>
            <li>Java</li>
            <li>PHP</li>
            <li>SQL</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="card-header">Version Control</h3>
          <ul className="card-body">
            <li>Git</li>
            <li>GitHub</li>
            <li>AWS</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="card-header">Tools</h3>
          <ul className="card-body">
            <li>VS Code</li>
            <li>Postman</li>
            <li>Chrome DevTools</li>
            <li>Slack</li>
            <li>Zoom</li>
            <li>Google Meet</li>
            <li>Microsoft Teams</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="card-header">Other</h3>
          <ul className="card-body">
            <li>Linux</li>
            <li>Strong Communicator</li>
            <li>Agile</li>
            <li>Scrum</li>
            <li>Red-green Refractor</li>
            <li>Pair Programming</li>
            <li>RESTful APIs</li>
            <li>Responsive Design</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
