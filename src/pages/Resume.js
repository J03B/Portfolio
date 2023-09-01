import React from "react";

export default function Resume() {
  return (
    <div className="container">
      <div className="container-fluid row">
        <div class="col">
          <h3>Resume</h3>
          <a
            class="btn btn-success"
            href="./assets/files/Joseph_Black_Resume_2.pdf"
            download
          >
            Click here to download my current Resume.
          </a>
        </div>

        <div class="col">
          <h3>Technical Skills</h3>
          <p>
            • Languages: JavaScript, C#, C++, Python, HTML5, mySQL, Java, Matlab, MongoDB, Express, React,
            Node, Handlebars, Bootstrap, CSS3, NoSQL, jQuery, XML
            <br />
            • Proficient in database programming
            <br />
            • Advanced in computational programming
            <br />
            • Proficient in Git and Agile methodology
            <br />
            • Proficient in RESTful Web API creation
          </p>
        </div>
      </div>
    </div>
  );
}
