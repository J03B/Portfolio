import React from "react";
import Project from "../components/Project";

export default function Portfolio() {
  const projects = [
    {
      projectTitle: "Fitness Focus",
      projectDescription:
        "Interactive and polished MERN Project to track live workouts using React, Material UI, MongoDB, Express, Apollo, and Heroku.",
      projectLink: "https://fitnessfocus.herokuapp.com/",
      projectGitHub: "https://github.com/J03B/fitness-focus",
      projectLinkPhrase: "Workout!",
      imgSrc: "./images/fitness-focus.png",
      imgAlt: "shades of teal pour painted artwork",
    },
    {
      projectTitle: "Goal Tracker",
      projectDescription:
        "Full stack team project to track goals using a backend SQL database and slick front-end UI powered by Heroku.",
      projectLink: "https://express-goal-tracker.herokuapp.com/",
      projectGitHub: "https://github.com/dhoneck/goal-tracker",
      projectLinkPhrase: "Track My Goals!",
      imgSrc: "./images/erol-ahmed-unsplash.jpg",
      imgAlt: "yeal yucca plant bird-eye view as it begins blooming",
    },
    {
      projectTitle: "Story Seeker",
      projectDescription:
        "An Interactive Google Books API search engine. Use it to save books to your personal user account.",
      projectLink: "https://story-seek.herokuapp.com/",
      projectGitHub: "https://github.com/J03B/story-seeker",
      projectLinkPhrase: "Read Books!",
      imgSrc: "./images/story-seeker.png",
      imgAlt:
        "screenshot of the application in mid-book search over key-word Thrawn.",
    },
    {
      projectTitle: "No Mercy Trivia",
      projectDescription:
        "A fun, interactive trivia game implementing numerous server side APIs, compiling multiple sources into one, user-friendly game.",
      projectLink: "https://j03b.github.io/no-mercy-trivia/",
      projectGitHub: "https://github.com/J03B/no-mercy-trivia",
      projectLinkPhrase: "Test My Trivia Skills!",
      imgSrc: "./images/willian-justen-unsplash.jpg",
      imgAlt:
        "teal mountains with a tan-orange glow in the sky and horizon, overlay with fog",
    },
    {
      projectTitle: "Weather Dashboard",
      projectDescription:
        "Created custom Portal to pull in the forecast for any searchable city.",
      projectLink: "https://j03b.github.io/weather-dashboard/",
      projectGitHub: "https://github.com/J03B/weather-dashboard",
      projectLinkPhrase: "Search Weather",
      imgSrc: "./images/Weather-Portal-Vegas.png",
      imgAlt:
        "Image/screenshot of what the Weather Portal looks like when searching for Las Vegas forecast",
    },
    {
      projectTitle: "Distillation Column",
      projectDescription:
        "Python code to determine specific values for distillation column operation.",
      projectLink: "./assets/files/Homework 16.ipynb",
      projectGitHub: "https://github.com/J03B?tab=repositories",
      projectLinkPhrase: "Download",
      imgSrc: "./images/plant-towers.jpg",
      imgAlt:
        "distiallation collumns at a refinery at dawn, cascaded with work lights",
    },
  ];

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <Project myProjects={projects} />
      </div>
    </div>
  );
}
