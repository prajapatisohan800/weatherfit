import React from 'react';
import './persend_dataimg.scss';

export default function Persent_data_img() {
  return (
    <div className="weather-card">

  <img
    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200"
    alt="background"
    className="bg-image"
  />

  <div className="overlay"></div>

  <div className="weather-content">

    <div className="top-area">

      <div>

        <div className="location">
          <i className="bi bi-geo-alt-fill"></i>
          Jaipur, Rajasthan
        </div>

        <div className="date">
          Mon, 25 Aug • 09:30 AM
        </div>

      </div>

      <img
        src="https://cdn-icons-png.flaticon.com/512/1163/1163661.png"
        className="weather-icon"
        alt=""
      />

    </div>

    <div className="temp">
      32<span>°C</span>
    </div>

    <h4>Partly Cloudy</h4>

    <p>Feels like 35°C</p>

    <div className="weather-info">

      <div className="info-box">
        <i className="bi bi-cloud-drizzle"></i>
        <small>Rain Chance</small>
        <strong>25%</strong>
      </div>

      <div className="info-box">
        <i className="bi bi-droplet-fill"></i>
        <small>Humidity</small>
        <strong>68%</strong>
      </div>

      <div className="info-box">
        <i className="bi bi-wind"></i>
        <small>Wind</small>
        <strong>12 km/h</strong>
      </div>

      <div className="info-box">
        <i className="bi bi-eye"></i>
        <small>Visibility</small>
        <strong>8 km</strong>
      </div>

      <div className="info-box">
        <i className="bi bi-speedometer2"></i>
        <small>Pressure</small>
        <strong>1008 hPa</strong>
      </div>

    </div>

  </div>

</div>
  )
}
