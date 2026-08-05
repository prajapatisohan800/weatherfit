import React from "react";
import "./air_quality.scss";

export default function Air_quality() {
  return (
    <div className="air-quality-card">

      <div className="air-header">
        <span className="leaf-icon">🍃</span>
        <h2>Air Quality</h2>
      </div>


      <div className="air-content">

        <div className="aqi-circle">
          <div className="aqi-value">
            <h1>78</h1>
            <span>AQI</span>
          </div>
        </div>


        <div className="air-status">
          <h3>Good</h3>
          <p>Air quality is satisfactory.</p>
        </div>

      </div>


      <div className="aqi-bar">

        <div className="bar">
          <div className="pointer"></div>
        </div>

        <div className="scale">
          <span>0</span>
          <span>50</span>
          <span>100</span>
          <span>150</span>
          <span>200</span>
          <span>300+</span>
        </div>

      </div>


    </div>
  );
}