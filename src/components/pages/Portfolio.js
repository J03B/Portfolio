import React from 'react';

export default function Portfolio() {
    return (
        <div>
            <section id="Work">
                                    
                <a class="card" id="first-tile" href="https://express-goal-tracker.herokuapp.com/">
                    <img src="./images/erol-ahmed-unsplash.jpg" alt="yeal yucca plant bird-eye view as it begins blooming" />
                    <div class="card-header">
                        <h3>Goal Tracker</h3>
                        <p>Full stack team project to track goals using a backend database and slick front-end UI powered by Heroku</p>
                    </div>
                </a>

                <a class="card" href="https://j03b.github.io/module-challenges/01-Challenge/Horiseon-details-page/">
                    <img src="./images/digital-marketing-meeting.jpg" alt="Horiseon team conference meeting over a conference room table" />
                    <div class="card-header">
                        <h3>Horiseon Details</h3>
                        <p>Basic Website Details page optimization (html and css)</p>
                    </div>
                </a>

                <a class="card" href="https://j03b.github.io/no-mercy-trivia/">
                    <img src="./images/willian-justen-unsplash.jpg" alt="teal mountains with a tan-orange glow in the sky and horizon, overlay with fog" />
                    <div class="card-header">
                        <h3>No Mercy Trivia</h3>
                        <p>A fun, interactive trivia game implementing numerous server side APIs</p>
                    </div>
                </a>

                <a class="card" href="./assets/files/Homework 16.ipynb">
                    <img src="./images/plant-towers.jpg" alt="distiallation collumns at a refinery at dawn, cascaded with work lights" />
                    <div class="card-header">
                        <h3>Distillation Column</h3>
                        <p>Python code to determine specific values for distillation column operation</p>
                    </div>
                </a>
                
                <a class="card" href="#">
                    <img src="./images/bia-w-a-unsplash.jpg" alt="shades of teal pour painted artwork" />
                    <div class="card-header">
                        <h3>Coming Soon</h3>
                        <p>A full stack personal project to track live workouts</p>
                    </div>
                </a>
            </section>
        </div>
    );
}