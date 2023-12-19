import React from 'react';
import googleLogo from './google-logo.png';

const GoogleButton = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button
        className="g-signin"
        data-width="120" // Adjust the width as needed
        data-height="40" // Adjust the height as needed
        style={{ backgroundColor: 'white', color: 'black', border: '2px solid black' }}
      >
        <span className="g-signin__icon" style={{ fontSize: '14px' }}> {/* Adjust font size */}
          <img src={googleLogo} alt="Google Icon" style={{ width: '20px', height: '20px', marginRight: '10px' }} /> {/* Adjust image width and height */}
        </span>
        <span className="g-signin__text" >Sign in with Google</span>
      </button>
    </div>
  );
};

export default GoogleButton;
