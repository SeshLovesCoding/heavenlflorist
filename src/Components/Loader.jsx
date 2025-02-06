import React from "react";
import 'animate.css';
import "./Loader.css"; // Make sure to link the CSS file

const Loader = () => {
  return (
    <div className="loader-container">
      <img src="/src/image/logo-transparent.png" alt="Logo" className="loader-image" />
      <p className="welcome-text">Welcome to HeavenL Florist</p>
    </div>
  );
};

export default Loader;

