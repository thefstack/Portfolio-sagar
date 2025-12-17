"use client";
import React from "react";
import "./metal-button.css";

const MetalButton = ({ children = "Button", onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`metal-btn ${className}`}
    >
      {children}
      <span className="metal-btn__border"></span>
    </button>
  );
};

export default MetalButton;
