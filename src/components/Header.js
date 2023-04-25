import React from 'react';

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid justify-content-center">
                    <div className="nav-item">
                        <a
                            className="link-secondary nav-link"
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/J03B?tab=repositories"
                        >
                            <span className="display-3">Joseph Black</span>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;