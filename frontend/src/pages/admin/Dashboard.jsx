import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <h1>Dashboard</h1>
        <ul>
          <li>Home</li>
          <li>Analytics</li>
          <li>Reports</li>
          <li>Settings</li>
        </ul>
      </div>
      <div className="content">
        <header className='dash-header'>
          <h2>Welcome to Your Dashboard</h2>
        </header>
        <main className='dash-main'>
            5
          {/* Your content goes here */}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
