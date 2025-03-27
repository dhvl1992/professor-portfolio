// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import components
import Header from './components/Header';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import Footer from './components/Footer';

// Import pages
import Home from './pages/Home';
import Teaching from './pages/Teaching';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Navbar />
        <MainSection>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teaching" element={<Teaching />} />
          </Routes>
        </MainSection>
        <Footer />
      </div>
    </Router>
  );
}

export default App;