import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav class="navbar">
      <div class="container-fluid justify-content-evenly">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a
              href="#about"
              onClick={() => handlePageChange('About')}
              class={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
              About
            </a>
          </li>
          <li class="nav-item">
            <a
              href="#portfolio"
              onClick={() => handlePageChange('Portfolio')}
              class={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >
              Portfolio
            </a>
          </li>
          <li class="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              class={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </a>
          </li>
          <li class="nav-item">
            <a
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              class={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
