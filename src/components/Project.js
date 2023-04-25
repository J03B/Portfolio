import React from 'react';

export default function Project(props) {
    return props.myProjects.map((item, index) => (
        <div class="col">
            <div class="card mb-3" id={index}>
                <img src={item.imgSrc} class="card-img-top" alt={item.imgAlt} />
                <div class="card-body">
                    <h5 class="card-title">{item.projectTitle}</h5>
                    <p class="card-text">{item.projectDescription}</p>
                    <a href={item.projectLink} class="btn btn-primary">{item.projectLinkPhrase}</a>
                </div>
            </div>
        </div>
    ));
}