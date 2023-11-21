// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Login.css'; // Import the CSS file

const Login = () => {
  const [loginError, setLoginError] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');

    // In a real-world scenario, you would send a request to the server to authenticate the user.
    // For simplicity, we'll check a hardcoded username and password.
    if (username === 'username' && password === 'password') {
      setLoginError(false);
      login(username, password);
      navigate('/Home');
    } else {
      setLoginError(true);
    }
  };

  return (
    <div className="login-container">
      <header>
        <h2>Login</h2>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" name="username" />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
        {loginError && <p className="error-message">Incorrect username or password. Please try again.</p>}
      </main>
      <footer>
        <p>© 2023 StopShot. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Login;
