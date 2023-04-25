import React from 'react';

export default function Project(props) {
    return props.myProjects.map((item, index) => (
        <div className="col">
            <div className="card mb-3" id={index}>
                <img src={item.imgSrc} className="card-img-top" alt={item.imgAlt} />
                <div className="card-body">
                    <h5 className="card-title">{item.projectTitle}</h5>
                    <p className="card-text">{item.projectDescription}</p>
                    <a href={item.projectLink} className="btn btn-primary">{item.projectLinkPhrase}</a>
                </div>
            </div>
        </div>
    ));
}