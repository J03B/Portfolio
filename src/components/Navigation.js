import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar">
      <div className="container-fluid justify-content-evenly">
        <ButtonGroup size="large" aria-label="large button group">
            <Button
              variant='outlined'
              href="#about"
              onClick={() => handlePageChange('About')}
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
              About
            </Button>
            <Button
              variant='outlined'
              href="#portfolio"
              onClick={() => handlePageChange('Portfolio')}
              className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >
              Portfolio
            </Button>
            <Button
              variant='outlined'
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </Button>
            <Button
              variant='outlined'
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </Button>
        </ButtonGroup>
      </div>
    </nav>
  );
}

export default Navigation;
