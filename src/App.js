// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Default from './Pages/Default';
import Login from './Pages/Login';
import Home from './Pages/Home';
import MediaUpload from './Pages/MediaUpload'; // Assuming you have a component for the media upload page
import UserProfile from './Pages/UserProfile'; // Assuming you have a component for the user profile page
import { useAuth } from './context/AuthContext';
import Navbar from './routes/Navbar'; // Import the Navbar component

const App = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/login" element={<Login />} />
        {isLoggedIn && (
          <>
            <Route
              path="/Home"
              element={
                <>
                  <Navbar />
                  <Home />
                </>
              }
            />
            <Route
              path="/MediaUpload"
              element={
                <>
                  <Navbar />
                  <MediaUpload />
                </>
              }
            />
            <Route
              path="/UserProfile"
              element={
                <>
                  <Navbar />
                  <UserProfile />
                </>
              }
            />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
