import React from 'react'
import "./home_compase.scss"

export default function Home_compase() {
  return (
   <div className="compass-card">

    <h3 className="card-title">Compass</h3>

    <div className="compass-wrapper">

        <div className="compass-circle">

            <span className="direction north">N</span>
            <span className="direction east">E</span>
            <span className="direction south">S</span>
            <span className="direction west">W</span>

            <span className="degree degree-top-left">↖</span>
            <span className="degree degree-top-right">↗</span>
            <span className="degree degree-bottom-left">↙</span>
            <span className="degree degree-bottom-right">↘</span>

            <div className="needle">
                <div className="needle-top"></div>
                <div className="needle-center"></div>
            </div>

        </div>

        <div className="compass-info">

            <h1>NE</h1>

            <h2>42°</h2>

            <button className="compass-btn">
                <i className="bi bi-compass"></i>
                Open Compass
            </button>

        </div>

    </div>

</div>
  )
}
