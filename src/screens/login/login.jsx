import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginpage.css';
import Registration from './register';
import GoogleButton from './GoogleButton';

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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

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
            <div className="button-container">
              <button
                onClick={handleLogin}
                style={{ margin: '10px auto', display: 'block' }}
              >
                Login
              </button>
             
            </div>
            <p className="forgot-password">
              Forgot password? <a href="#!">Reset here</a>
            </p>
            <GoogleButton />
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
      <div className="form-container">{getActiveComponent()}</div>
      <p style={{ color: messageColor }}>{message}</p>
    </div>
  );
}

export default LoginPage;