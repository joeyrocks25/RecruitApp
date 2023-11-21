// src/Pages/Home.js
import React from 'react';

const Home = () => {
  return (
    <div>
      <header>
        <h1>Welcome to StopShot</h1>
        {/* Add any additional header content or navigation links */}
      </header>
      <main>
        <section>
          <h2>Media Upload Section</h2>
          {/* Add media upload form or button */}
        </section>
        <section>
          <h2>User Profile Section</h2>
          {/* Add user profile details and controls */}
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

export default Home;
