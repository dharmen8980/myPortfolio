import React from "react";
const About = () => {
  return (
    <div className="page" id="about">
      <h1>About me</h1>
      <div>
        <p>
          As a full-stack developer with expertise in Java and Python, I have a
          strong foundation in both front-end and back-end development. I am
          skilled at delivering high-quality, scalable software solutions using
          technologies such as HTML, CSS, JavaScript, and TypeScript, and I have
          a strong understanding of responsive design.
        </p>
        <p>
          I am also proficient in back-end development and skilled in using SQL
          and NoSQL databases. I have experience with cloud computing and am
          able to effectively manage and maintain servers and networks using
          Linux and Unix.
        </p>
        <p>
          In addition to my technical skills, I have a demonstrated history of
          project management and have used tools such as Jira to deliver
          projects on time and within budget. I am also proficient in version
          control using Git and have strong communication and problem-solving
          skills.
        </p>
        <p>
          I am passionate about using my skills and experience to help
          organizations achieve their goals through the use of technology, and I
          am excited to continue learning and growing as a developer.
        </p>

        <p className="text-center mt-4">
          <a
            href="https://drive.google.com/file/d/1fHk1XnOn177t-T_U5AST-1iYpj7ew1EX/view?usp=share_link"
            download
          >
            <button>Download CV</button>
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
