import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleButton from './GoogleButton';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic - for demonstration, just navigate back to login
    navigate('/login');
  };

  return (
    <div className="form">
      <h2>Register</h2>
      <form onSubmit={handleFormSubmit}>
        {/* Input fields for registration */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Mobile Number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
        <input
          type="date"
          placeholder="Date of Birth"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />
        {/* Register button */}
        <button type="submit">Register</button>

        <GoogleButton />
      </form>
    </div>
  );
};

export default Registration;
