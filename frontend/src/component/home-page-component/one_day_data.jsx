import React from 'react'
import "./one_day_data.scss";

import sunminIcon from "../../assets/icon/sun-min-cloud-64.png"
import sunIcon from "../../assets/icon/sun-64.png"
import cloudRain from "../../assets/icon/cloud-with-rain-48.png"
import cloudLightRain from "../../assets/icon/cloud-with-lightning-and-rain-48.png"
import cloud from "../../assets/icon/cloud-48.png"


export default function One_day_data() {
  return (
   <div className="hourly-card">
    <div className="card-header">
        <h3>Hourly Forecast</h3>
        <a href="#">View all <span>→</span></a>
    </div>

    <div className="forecast-wrapper">

        <div className="forecast-item active">
            <p className="time">Now</p>

            <img src={sunminIcon} alt="weather"/>

            <h2>32°C</h2>
        </div>

        <div className="forecast-item">
            <p className="time">11 AM</p>

            <img src={sunIcon} alt="weather"/>

            <h2>33°C</h2>
        </div>

        <div className="forecast-item">
            <p className="time">12 PM</p>

            <img src={sunIcon} alt="weather"/>

            <h2>34°C</h2>
        </div>

        <div className="forecast-item">
            <p className="time">1 PM</p>

            <img src={cloudRain} alt="weather"/>

            <span className="rain">30%</span>

            <h2>33°C</h2>
        </div>

        <div className="forecast-item">
            <p className="time">2 PM</p>

            <img src={cloudRain} alt="weather"/>

            <span className="rain">40%</span>

            <h2>31°C</h2>
        </div>

        <div className="forecast-item">
            <p className="time">3 PM</p>

            <img src={cloudLightRain} alt="weather"/>

            <span className="rain">60%</span>

            <h2>30°C</h2>
        </div>

        <div className="forecast-item">
            <p className="time">4 PM</p>

            <img src={cloud} alt="weather"/>

            <h2>28°C</h2>
        </div>

    </div>
</div>
  )
}
