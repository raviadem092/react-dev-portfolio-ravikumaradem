import React from "react";
import RecordentThumbnail from '../assets/images/recordent.png';
import MFIRecordentThumbnail from '../assets/images/mfirecordent.png';
import CricketScorecardThumbnail from '../assets/images/cricketScroreCard.jpg';
import FlipYourCoin from '../assets/images/FlipYourCoin.png';
import ecart from '../assets/images/ecart.png';
import makeANote from '../assets/images/makeANote.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://makeyourcall.vercel.app/" target="_blank" rel="noreferrer">
                    <img src={FlipYourCoin} className="zoom" alt="thumbnail" width="100%" height="300"/>
                </a>
                <a href="https://makeyourcall.vercel.app/" target="_blank" rel="noreferrer">
                    <h2>Make Your Call</h2>
                </a>
                <p>
                    Developed a virtual coin flip app that records the last 10 tosses and provides
                    a statistics & analytics view. Built with React and JavaScript for interactive
                    user experience.
                </p>
            </div>
            {/* Recordent Project */}
            <div className="project">
                <a href="https://recordent.com" target="_blank" rel="noreferrer">
                    <img src={RecordentThumbnail} className="zoom" alt="Recordent thumbnail" width="100%" height="300" />
                </a>
                <a href="https://recordent.com" target="_blank" rel="noreferrer">
                    <h2>Recordent</h2>
                </a>
                <p>
                    Developed a platform to digitize credit records and track loan histories for 
                    financial institutions. Built with React, Node.js, and MySQL, featuring 
                    analytics dashboards and real-time data insights.
                </p>
            </div>
            <div className="project">
                <a href="https://mfi.recordent.com" target="_blank" rel="noreferrer">
                    <img src={MFIRecordentThumbnail} className="zoom" alt="MFI Recordent thumbnail" width="100%" height="300" />
                </a>
                <a href="https://mfi.recordent.com" target="_blank" rel="noreferrer">
                    <h2>MFI Recordent</h2>
                </a>
                <p>
                    Developed a specialized platform for Microfinance Institutions to manage 
                    client credit records, loan approvals, and repayments efficiently. Features 
                    include reporting dashboards, automated analytics, and secure data storage.
                </p>
            </div>
            <div className="project">
                <a href="https://cricketscorecardravikumaradem.vercel.app/" target="_blank" rel="noreferrer">
                    <img src={CricketScorecardThumbnail} className="zoom" alt="Cricket Scorecard thumbnail" width="100%" height="300" />
                </a>
                <a href="https://cricketscorecardravikumaradem.vercel.app/" target="_blank" rel="noreferrer">
                    <h2>Cricket Scorecard App</h2>
                </a>
                <p>
                    Developed a real-time cricket scorecard application that tracks live match scores, 
                    player stats, and match summaries. Built using React for the frontend and Node.js for 
                    backend API integration with live cricket data.
                </p>
            </div>
            <div className="project">
                <a href="https://e-kart-ravikumaradem.vercel.app//" target="_blank" rel="noreferrer">
                    <img src={ecart} className="zoom" alt="Ecart thumbnail" width="100%" height="300" />
                </a>
                <a href="https://e-kart-ravikumaradem.vercel.app//" target="_blank" rel="noreferrer">
                    <h2>E-Kart</h2>
                </a>
                <p>
                    Developed an e-commerce platform for online shopping and product management. 
                    Features include user authentication, secure payment processing, and 
                    real-time order tracking.
                </p>
            </div>
            <div className="project">
                <a href="https://make-a-note-ravikumaradem.vercel.app//" target="_blank" rel="noreferrer">
                    <img src={makeANote} className="zoom" alt="Make a Note thumbnail" width="100%" height="300" />
                </a>
                <a href="https://make-a-note-ravikumaradem.vercel.app//" target="_blank" rel="noreferrer">
                    <h2>Make A Note</h2>
                </a>
                <p>
                    A lightweight web-based note-taking app to quickly jot down and manage text notes.
                    Bare-bones interface with essential add/edit/delete functionality, no fluff or accounts.
                    Simple personal tool, built for fast, distraction-free note capture.
                </p>
            </div>
        </div>
    </div>
    );
}

export default Project;
