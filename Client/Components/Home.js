import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to TechKnow Quiz App</h1>
        <p>Test and improve your tech knowledge with quizzes on HTML/CSS, React, SQL, JavaScript and Python.</p>
      </header>
      <nav className="home-nav">
        <Link to="/login" className="home-link">Login</Link>
        <Link to="/signup" className="home-link">Sign Up</Link>
        <Link to="/topics" className="home-link">Select a Topic</Link>
      </nav>
    </div>
  );
};

export default Home;
