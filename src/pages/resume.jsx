import React from "react";
import "./style/pages.css"

export default function resume() {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <h2>Education:</h2>
      <div>
        <h3>Bachelor's Degree in Occupational Safety</h3>
        <h4>University of Wisconsin-Whitewater, 2013</h4>
        <h3>Certificate in Full-Stack Web Developer</h3>
        <h4>University of North Carolina-Charlotte, 2023</h4>
      </div>

          <div>
        <h2>Skills:</h2>
        <h5>OSHA 10-hour</h5>
        <h5>CPR & First-Aid</h5>
        <h5>JavaScript (React, Express, Node.js)</h5>
        <h5>HTML, CSS</h5>
        <h5>Database Management 
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>GraphQl</li>

        </h5>
        <h5>Version Control (Git)</h5>
    </div>
      <div>

      </div>
    </div>
  );
}