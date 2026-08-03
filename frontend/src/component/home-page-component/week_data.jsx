import React from 'react'
import "./week_data.scss";

import sunminIcon from "../../assets/icon/sun-min-cloud-64.png"
import sunIcon from "../../assets/icon/sun-64.png"
import cloudRain from "../../assets/icon/cloud-with-rain-48.png"
import cloudLightRain from "../../assets/icon/cloud-with-lightning-and-rain-48.png"
import cloud from "../../assets/icon/cloud-48.png"

export default function Week_data() {
  return (
   <div className="forecast-card">

    <div className="forecast-header">
        <h3>7-Day Forecast</h3>

        <a href="#">
            View all →
        </a>
    </div>

    <div className="forecast-days">

        <div className="day-card">
            <p className="day">Mon</p>

            <img src={sunIcon} alt="weather"/>

            <h4>32° / 26°</h4>
        </div>

        <div className="day-card">
            <p className="day">Tue</p>

            <img src={cloudLightRain} alt="weather"/>

            <h4>33° / 26°</h4>
        </div>

        <div className="day-card">
            <p className="day">Wed</p>

            <img src={cloudRain} alt="weather"/>

            <h4>31° / 25°</h4>
        </div>

        <div className="day-card">
            <p className="day">Thu</p>

            <img src={cloud} alt="weather"/>

            <h4>30° / 25°</h4>
        </div>

        <div className="day-card">
            <p className="day">Fri</p>

            <img src={sunIcon} alt="weather"/>

            <h4>32° / 26°</h4>
        </div>

        <div className="day-card">
            <p className="day">Sat</p>

            <img src={sunIcon} alt="weather"/>

            <h4>33° / 27°</h4>
        </div>

        <div className="day-card">
            <p className="day">Sun</p>

            <img src={sunIcon} alt="weather"/>

            <h4>32° / 26°</h4>
        </div>

    </div>

</div>
  )
}
