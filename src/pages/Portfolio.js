import React, { useState } from 'react';
import Project from '../components/Project';

export default function Portfolio() {
    const [projects, setProjects] = useState([{
        projectTitle: 'Goal Tracker',
        projectDescription: 'Full stack team project to track goals using a backend SQL database and slick front-end UI powered by Heroku.',
        projectLink: 'https://express-goal-tracker.herokuapp.com/',
        projectLinkPhrase: 'Track My Goals!',
        imgSrc: './images/erol-ahmed-unsplash.jpg',
        imgAlt: 'yeal yucca plant bird-eye view as it begins blooming'
    },
    {
        projectTitle: 'No Mercy Trivia',
        projectDescription: 'A fun, interactive trivia game implementing numerous server side APIs, compiling multiple sources into one, user-friendly game.',
        projectLink: 'https://j03b.github.io/no-mercy-trivia/',
        projectLinkPhrase: 'Test My Trivia Skills!',
        imgSrc: './images/willian-justen-unsplash.jpg',
        imgAlt: 'teal mountains with a tan-orange glow in the sky and horizon, overlay with fog'
    },
    {
        projectTitle: 'Weather Dashboard',
        projectDescription: 'Created custom Portal to pull in the forecast for any searchable city.',
        projectLink: 'https://j03b.github.io/weather-dashboard/',
        projectLinkPhrase: 'Search Weather Forecasts',
        imgSrc: './images/Weather-Portal-Vegas.png',
        imgAlt: 'Image/screenshot of what the Weather Portal looks like when searching for Las Vegas forecast'
    },
    {
        projectTitle: 'Distillation Column',
        projectDescription: 'Python code to determine specific values for distillation column operation',
        projectLink: './assets/files/Homework 16.ipynb',
        projectLinkPhrase: 'Download Jupyter Notebook',
        imgSrc: './images/plant-towers.jpg',
        imgAlt: 'distiallation collumns at a refinery at dawn, cascaded with work lights'
    },
    {
        projectTitle: 'Workout Tracking',
        projectDescription: 'A full stack personal project to track live workouts',
        projectLink: 'https://github.com/J03B/Fitness-App',
        projectLinkPhrase: 'Coming Soon',
        imgSrc: './images/bia-w-a-unsplash.jpg',
        imgAlt: 'shades of teal pour painted artwork'
    }]);

    return (
        <div class="container">
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <Project myProjects={projects}/>
            </div>
        </div>
    );
}