// src/Pages/Default.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Default.css'; // Import the CSS file

const Default = () => {
  return (
    <div className="default-container">
      <header>
        <h1>Welcome to StopShot</h1>
        <nav>
          <ul>
            <li><Link to="/login">Sign In</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h2>About StopShot</h2>
          <p>
            StopShot is a platform for sharing and exploring media content. Sign in to start your journey!
          </p>
        </section>
      </main>
      <footer>
        <p>Terms of Service | Privacy Policy | Contact Us</p>
        <ul>
          <li><a href="https://twitter.com/stopshot" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://facebook.com/stopshot" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://instagram.com/stopshot" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default Default;
