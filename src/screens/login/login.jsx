import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginpage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Registration from './register';
import GoogleButton from './GoogleButton'; // Import your GoogleButton component

const login = () => {
  localStorage.setItem('auth_token', 'my_auth_token_here');
};

function Tabs({ activeTab, handleTabChange }) {
  return (
    <div className="tabs">
      <button onClick={() => handleTabChange('login')}>Login</button>
      <button onClick={() => handleTabChange('register')}>Register</button>
    </div>
  );
}

function LoginPage() {
  const [activeTab, setActiveTab] = useState('login');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');
  const navigate = useNavigate();
  const [username, setUsername] = useState(''); // State for username
  const [password, setPassword] = useState(''); // State for password

  const handleTabChange = (tab) => setActiveTab(tab);

  const handleLogin = () => {
    if (username === 'root' && password === '12345678') {
      setMessage('Logged In Successfully');
      setMessageColor('green');
      login();
      navigate('/home');
    } else {
      setMessage('Invalid Username and Password');
      setMessageColor('red');
    }
  };

  const getActiveComponent = () => {
    switch (activeTab) {
      case 'login':
        return (
          <div className="form">
            <h2>Login</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {/* Wrapping the login button to center it */}
              <button onClick={handleLogin}>Login</button>
            </div>
            <p>Forgot password? <a href="#!">Reset here</a></p>
            {/* Social media icons */}
            {/* Add your social media icons */}
            <GoogleButton /> {/* Place the GoogleButton component here */}
          </div>
        );
      case 'register':
        return <Registration />;
      default:
        return (
          <div className="form">
            <h2>Login</h2>
            {/* Your login form */}
          </div>
        );
    }
  };

  return (
    <div className="container">
      <Tabs activeTab={activeTab} handleTabChange={handleTabChange} />
      {getActiveComponent()}
      <p style={{ color: messageColor }}>{message}</p>
    </div>
  );
}

export default LoginPage;
