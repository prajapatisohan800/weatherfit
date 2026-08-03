import React from 'react'
import "./sun_moon_data.scss";

import sunminIcon from "../../assets/icon/sun-min-cloud-64.png"
import sunIcon from "../../assets/icon/sun-64.png"
import cloudRain from "../../assets/icon/cloud-with-rain-48.png"
import moonS from "../../assets/icon/moon-67.png"
import moonR from "../../assets/icon/moon-48.png"

export default function Sun_moon_data() {
  return (
    <div className="sun-moon-card">

    <h2>Sun & Moon</h2>


    <div className="top-info">

        <div className="item">
            <img src={sunIcon} alt=""/>
            <p>Sunrise</p>
            <h3>05:48 AM</h3>
        </div>

        <div className="divider"></div>

        <div className="item">
            <img src={sunIcon} alt=""/>
            <p>Sunset</p>
            <h3>07:18 PM</h3>
        </div>

    </div>

  
    <div className="sun-path">

        <div className="sun">
            ☀
        </div>
         
        <svg viewBox="0 0 300 120" style={{height:'90px'}}>

            <defs>
                <linearGradient id="lineColor" x1="0%" x2="100%">
                    <stop offset="0%" stopColor="#FDB813"/>
                    <stop offset="100%" stopColor="#FDB813"/>
                </linearGradient>

                <linearGradient id="fillColor" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#FFD76A" stopOpacity=".45"/>
                    <stop offset="100%" stopColor="#FFD76A" stopOpacity="0"/>
                </linearGradient>

            </defs>

            <path
                d="M20 100 Q150 5 280 100"
                fill="none"
                stroke="url(#lineColor)"
                strokeWidth="2"
            />

            <path
                d="M20 100 Q150 5 280 100 L280 100 L20 100 Z"
                fill="url(#fillColor)"
            />

        </svg>

    </div>

    <hr style={{margin:'1px 0px'}} />

  
    <div className="bottom-info">

        <div className="moon-item">
            <img src={moonR} alt=""/>
            <div>
                <p>Moonrise</p>
                <h3>08:12 PM</h3>
            </div>
        </div>

        <div className="moon-item">
            <div>
                <p>Moonset</p>
                <h3>05:31 AM</h3>
            </div>

            <img src={moonS} alt=""/>
        </div>

    </div>

    <hr style={{margin:'8px 0px'}} />

    <div className="moon-phase">

        <img src={moonR} alt=""/>

        <span>Moon Phase: Waning Crescent</span>

    </div>

</div>
  )
}
