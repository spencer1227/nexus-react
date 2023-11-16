import React from "react";
import "./style/pages.css"

export default function resume() {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <h2>Education:</h2>
      <div>
        <h3>Bachelor's Degree</h3> 
        <h4>Occupational Safety</h4>
        <h4>University of Wisconsin-Whitewater</h4>
        <h4>September 2013 - August 2018</h4>
        <h3>Full-Stack Web Developer Certificate</h3>
        <h4>University of North Carolina-Charlotte</h4>
        <h4>August - November 2023</h4>
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