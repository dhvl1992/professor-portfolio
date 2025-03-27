// src/pages/Home.js
import React from 'react';
import '../pages/Pages.css';

function Home() {
  return (
    <div>
      <h2 className="page-title">Academic Profile</h2>
      
      <div className="profile-section">
      <img src="/images/photo.png" alt="Dr. Dhaval U. Patel" className="profile-image" />
        <div className="profile-details">
          <h3>Dr. Dhaval U. Patel, Ph.D.</h3>
          <p>Assistant Professor of Electronics and Communcation Engineering</p>
          <p className="contact-info">Office: Government Engineering College, Bharuch<br />
          Email: dhvl1992.gec@gmail.com<br /></p>
        </div>
      </div>
      
      <div>
        <h3 className="section-title">Research Interests</h3>
        <p className="page-content">
          My research focuses on artificial intelligence, machine learning, and their applications in solving real-world problems. 
          I am particularly interested in natural language processing, computer vision, and the ethical implications of AI technologies.
        </p>
        
        <h3 className="section-title">Education</h3>
        <ul className="feature-list">
          <li>Ph.D. in Electronics and Communication Engineering, Gujarat Technological University, 2025</li>
          <li>M.E. in Signal Processing and VLSI Technology, VGEC, Chandkheda 2015</li>
          <li>B.Tech. in Electronics and Communication Engineering, Nirma University, Ahmedabad, 2013</li>
        </ul>
        
        <h3 className="section-title">Selected Publications</h3>
        <div className="publications-list">
          <div className="publication-item">
          Patel, Dhaval U., and Jay M. Joshi (2022). "Deep Learning Based Static Indian-Gujarati Sign Language Gesture Recognition." 
            <em>SN Computer Science</em>, 3.5, 380. ISSN: 2661-8907, https://doi.org/10.1007/s42979-022-01254-2
          </div>
          <div className="publication-item">
          Jay M. Joshi, Dhaval U. Patel (2024). "Dynamic Indian Sign Language Recognition Based on Enhanced LSTM with Custom Attention Mechanism." 
            <em>SSRG International Journal of Electronics and Communication Engineering</em>, vol. 11, no. 2, pp. 60-68, 2024 ISSN: 2348-8549, https://doi.org/10.14445/23488549/IJECE-V11I2P107.
          </div>
          <div className="publication-item">
          Patel, Dhaval U., and Jay M. Joshi (2024). "GIDSL: Indian-Gujarati Isolated Dynamic Sign Language Recognition using Deep Learning." 
            <em>SN Computer Science</em>,ISSN: 2661-8907 https://doi.org/10.1007/s42979-024-02776-7.
          </div>
          <div className="publication-item">
          Jay M. Joshi and Patel, Dhaval U. (2023). "Transformer-Based Deep Learning Approach for Indian Sign Language Recognition" 
            <em>International Journal of All Research Education and Scientific Methods.</em>,ISSN: 2455-6211 Volume 11, Issue 12.
          </div>
          <div className="publication-item">
          Patel, Dhaval U., and Jay M. Joshi (2022). "Review of Indian Dynamic Sign Language Recognition System" 
            <em>Proceedings of International Conference on Communication and Computational Technologies: ICCCT, Springer Nature Singapore</em>,ISBN: 978-981-19-3951-8
          </div>
        </div>

        
        <a href="#" className="academic-button">Download CV</a>
      </div>
    </div>
  );
}

export default Home;