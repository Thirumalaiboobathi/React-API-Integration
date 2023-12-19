import React from 'react';

function Tabs({ activeTab, handleTabChange }) {
  return (
    <div className="tabs">
      <button onClick={() => handleTabChange('login')}>Login</button>
      <button onClick={() => handleTabChange('register')}>Register</button>
    </div>
  );
}

export default Tabs;
