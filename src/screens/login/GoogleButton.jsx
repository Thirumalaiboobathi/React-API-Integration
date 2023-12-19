import React from 'react';

const GoogleButton = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button
        className="g-signin"
        data-width="240"
        data-height="50"
        style={{ backgroundColor: 'white', color: 'black',border: '2px solid black' }}
      >
        <span className="g-signin__icon">
          {/* Add the Google icon here */}
          <i className="fab fa-google"></i> {/* Assuming Font Awesome usage */}
          {/* Or use an image */}
          {/* <img src="google-icon.png" alt="Google Icon" /> */}
        </span>
        <span className="g-signin__text">Sign in with Google</span>
      </button>
    </div>
  );
};

export default GoogleButton;
