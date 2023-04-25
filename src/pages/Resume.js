import React from 'react';

export default function Resume() {
    return (
        <div className="container">
            <div className="container-fluid row">
                <div class="col">
                    <h3>Resume</h3>
                    <a class="btn btn-success" href="./assets/files/Joe_Black_Resume.pdf" download>Click here to download my current Resume.</a>
                </div>

                <div class="col">
                    <h3>Technical Skills</h3>
                    <p> 
                        • Languages: JavaScript (adv), C++ (prof), Python (prof), HTML5 (prof), mySQL (prof), 
                        Java, C, Matlab, MongoDB, Express, React, Node, Handlebars, Bootstrap, CSS3, NoSQL, jQuery
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