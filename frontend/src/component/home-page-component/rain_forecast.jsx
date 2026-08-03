import React from 'react'
import "./rain_forecast.scss";

import cloud from "../../assets/icon/cloud-148.png"
import cloudRain from "../../assets/icon/cloud-with-rain-48.png"

export default function Rain_forecast() {
  return (
    <div className="rain-card">

    <div className="rain-header">
        <img src={cloud} alt="Rain"/>
        <h2>Rain Forecast</h2>
    </div>

    <div className="rain-content">

        <div className="rain-icon">
            <img src={cloudRain} alt="Heavy Rain"/>
        </div>

        <div className="rain-details">
            <h1>25% chance</h1>
            <p>Rain possible in the evening</p>
        </div>

    </div>

    <div className="chart">

        <svg viewBox="0 0 320 120">

            <path
                d="M20 90
                C70 70,
                120 75,
                170 55
                S250 35,
                300 70"
                fill="none"
                stroke="#2F6BFF"
                strokeWidth="3"
                strokeLinecap="round"/>

            <circle cx="20" cy="90" r="4" fill="#2F6BFF"/>
            <circle cx="90" cy="74" r="4" fill="#2F6BFF"/>
            <circle cx="160" cy="59" r="4" fill="#2F6BFF"/>
            <circle cx="230" cy="42" r="4" fill="#2F6BFF"/>
            <circle cx="300" cy="70" r="4" fill="#2F6BFF"/>

        </svg>

        <div className="labels">

            <div>
                {/* <span></span> */}
                <p>Now</p>
            </div>

            <div>
                {/* <span>30%</span> */}
                <p>1 PM</p>
            </div>

            <div>
                {/* <span>45%</span> */}
                <p>4 PM</p>
            </div>

            <div>
                {/* <span>60%</span> */}
                <p>7 PM</p>
            </div>

            <div>
                {/* <span>25%</span> */}
                <p>10 PM</p>
            </div>

        </div>

    </div>

</div>
  )
}
