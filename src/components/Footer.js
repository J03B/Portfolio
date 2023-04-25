import React from "react";

function Footer() {
  return (
    <div>
        <footer className="lead">
            <div className="container">
                <div className="container-fluid">
                    <p>
                        <strong>My Full Stack Development Portfolio</strong> - a React site by{" "}
                        <a href="https://github.com/J03B" target="_blank" rel="noreferrer">
                            Joe Black
                        </a>
                        .
                        <hr />
                        <a
                            href="https://www.linkedin.com/in/joseph-black-5b8447161/"
                            target="_blank" rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                        {" "}|{" "}
                        <a href="https://www.facebook.com/joey.black.733/" target="_blank" rel="noreferrer">
                            Facebook
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    </div>
  );
}

export default Footer;