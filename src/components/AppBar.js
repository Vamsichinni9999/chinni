import React from 'react';
import './AppBar.css';

export default function AppBar() {
  return (
    <div className="appbar-root">
      <div className="appbar">
        <button className="menu-button">☰</button>
        <h1 className="title">Spring Boot React Full Stack Application</h1>
      </div>
    </div>
  );
}
