// src/pages/Teaching.js
import React from 'react';
import '../pages/Pages.css';

function Teaching() {
  return (
    <div>
      <h2 className="page-title">Teaching Materials</h2>
      <p className="page-content">Below you'll find course materials, syllabi, and resources for the courses I teach at the university.</p>
      
      <h3 className="section-title">Current Courses</h3>
      <div className="materials-grid">
        <div className="material-card">
          <h3>CS 101: Introduction to Programming</h3>
          <p>Fundamentals of programming concepts, algorithms, and problem-solving using Python.</p>
          <ul>
            <li>Course Syllabus</li>
            <li>Lecture Slides</li>
            <li>Lab Exercises</li>
          </ul>
          <p></p>
          <a href="#" className="academic-button">View Materials</a>
        </div>
        
        <div className="material-card">
          <h3>CS 342: Artificial Intelligence</h3>
          <p>Advanced topics in AI including machine learning, neural networks, and natural language processing.</p>
          <ul>
            <li>Course Syllabus</li>
            <li>Lecture Notes</li>
            <li>Project Guidelines</li>
          </ul>
          <p></p>
          <a href="#" className="academic-button">View Materials</a>
        </div>
        
        <div className="material-card">
          <h3>CS 450: Machine Learning</h3>
          <p>In-depth exploration of machine learning algorithms, techniques, and applications.</p>
          <ul>
            <li>Course Syllabus</li>
            <li>Lecture Videos</li>
            <li>Assignment Repositories</li>
          </ul>
          <p></p>
          <a href="#" className="academic-button">View Materials</a>
        </div>
      </div>
      
      <h3 className="section-title">Student Resources</h3>
      <div className="materials-grid">
        <div className="material-card">
          <h3>Research Opportunities</h3>
          <p>Information for students interested in research assistantships and thesis supervision.</p>
          <a href="#" className="academic-button">Learn More</a>
        </div>
        
        <div className="material-card">
          <h3>Recommended Readings</h3>
          <p>Additional books, papers, and resources to supplement your learning.</p>
          <a href="#" className="academic-button">View List</a>
        </div>
      </div>
    </div>
  );
}

export default Teaching;