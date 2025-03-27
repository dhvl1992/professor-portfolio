// src/components/MainSection.js
import React from 'react';
import './MainSection.css';

function MainSection({ children }) {
  return (
    <main className="main-section">
      {children}
    </main>
  );
}

export default MainSection;