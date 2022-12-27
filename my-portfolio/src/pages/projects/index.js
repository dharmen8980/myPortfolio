import "../page.css";
import React from "react";

const Projects = () => {
  return (
    <div className="page" id="projects">
      <h1>Recent Projects</h1>
      <div className="card">
        <div className="card-title">
          <h2 className="text-center font-semibold pt-7">
            Eyewitness Testimony
          </h2>
        </div>
        <div className="card-body">
          <h2 className="font-semibold pl-8">Description:</h2>
          <p>
            I built a web survey for the Department of Psychology at The
            University of Louisiana at Monroe. The survey needed to be able to
            easily allow users to respond to varying questions and have the
            ability to update questions and other materials. The department also
            needed to record the responses in a relational database and be able
            to download the data in an Excel file. I used Next.js as the
            frontend, node.js as the backend, Express and Axios for API access,
            and MySQL for the database. I also set up an admin panel with proper
            authentication and a protected page. I used the Papa Parse library
            to convert the response data from JSON to CSV format and allowed the
            administrator to download it.
          </p>
          <h2 className="font-semibold pl-8 my-4">Headlines:</h2>
          <ul className="list-disc pl-14">
            <li>Built a web survey for the Department of Psychology</li>
            <li>Allowed for easy updating of questions and other materials</li>
            <li>Recorded responses in a relational database</li>
            <li>Provided ability to download data in Excel format</li>
            <li>
              Set up an admin panel with proper authentication and protected
              page
            </li>
            <li>Used Next.js, node.js, Express, Axios, and MySQL</li>
            <li>Converted response data from JSON to CSV format</li>
          </ul>
        </div>
      </div>
      <div className="card">
        <div className="card-title">
          <h2 className="text-center font-semibold pt-7">
            Advanced Admin Dashboard with MERN
          </h2>
        </div>
        <div className="card-body">
          <h2 className="font-semibold pl-8">Description:</h2>
          <p>
            I built an advanced admin dashboard for data visualization and
            management. The dashboard includes line charts, pie charts, and a
            transaction table. It was built using the MERN stack and Material
            UI.
          </p>
          <h2 className="font-semibold pl-8 my-4">Headlines:</h2>
          <ul className="list-disc pl-14">
            <li>
              Created visualizations with line chart, pie chart, and geography
              map
            </li>
            <li>Mangaes transactions and admin history with dynamic table</li>
            <li>
              Utilized the MERN stack and Material UI for a modern and
              user-friendly interface
            </li>
          </ul>
        </div>
      </div>
      <div className="card">
        <div className="card-title">
          <h2 className="text-center font-semibold pt-7">
            Dynamic Website for Kennedy Rice Mil
          </h2>
        </div>
        <div className="card-body">
          <h2 className="font-semibold pl-8">Description:</h2>
          <p>
            I built a dynamic website for the company Kennedy Rice Mill using
            Django, a powerful web framework for Python. The website includes an
            admin panel that allows the company to easily update their inventory
            and track user activity. It also features a password manager that
            keeps a log of admin login activity, including date and time stamps,
            and allows for easy password reset. In addition to Django, I used a
            variety of other technologies and tools to complete this project,
            such as HTML, CSS, and JavaScript for the front-end, and a variety
            of libraries and frameworks to support the back-end functionality.
          </p>
          <h2 className="font-semibold pl-8 my-4">Headlines:</h2>
          <ul className="list-disc pl-14">
            <li>Advanced website development with Django</li>
            <li>Dynamic inventory management and user tracking</li>
            <li>Seecure password management system</li>
            <li>
              Wide range of technologies used to delicer top-quality results for
              the client
            </li>
            <li>
              Set up an admin panel with proper authentication and protected
              page
            </li>
            <li>Used Next.js, node.js, Express, Axios, and MySQL</li>
            <li>Converted response data from JSON to CSV format</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
