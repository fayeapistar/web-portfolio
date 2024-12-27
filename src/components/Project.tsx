import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <img src={mock01} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Library Management System</h2>
                <p>Developed an efficient and user-friendly management system for tracking and recording library books.</p>
            </div>
            <div className="project">
                <img src={mock02} className="zoom" alt="thumbnail" width="100%"/>
                <h2>MESA Database System</h2>
                <p>Developed a database management system designed for the Mechanical Engineering Student Association (MESA) which enables efficient management of student information, event details, and event schedules through a user-friendly interface for data entry, editing, and retrieval.</p>
            </div>
            <div className="project">
                <img src={mock03} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Todo List Website</h2>
                <p>Developed a simple task management application built with Laravel. It allows users to create, edit, and delete tasks through an intuitive web interface.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
