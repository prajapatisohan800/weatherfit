import React from 'react'
import "./running_tracker.scss"

export default function Running_tracker() {
  return (
    <div className="running-card">
    <div className="running-header">
        <div className="running-icon">
            <i className="fa-solid fa-person-running"></i>
        </div>

        <h2>Running Tracker</h2>
    </div>

    <h3 className="activity-title">Today's Activity</h3>

    <div className="activity-stats">

        <div className="stat-item">
            <h2>3.2</h2>
            <span>km</span>
        </div>

        <div className="stat-item">
            <h2>24</h2>
            <span>min</span>
        </div>

        <div className="stat-item">
            <h2>210</h2>
            <span>kcal</span>
        </div>

    </div>

    <div className="weekly-chart">

        <div className="chart-item">
            <div className="bar light" style={{height: '60px'}}></div>
            <span>M</span>
        </div>

        <div className="chart-item">
            <div className="bar light" style={{height: '72px'}}></div>
            <span>T</span>
        </div>

        <div className="chart-item">
            <div className="bar light" style={{height: '78px'}}></div>
            <span>W</span>
        </div>

        <div className="chart-item">
            <div className="bar active" style={{height: '95px'}}></div>
            <span>T</span>
        </div>

        <div className="chart-item">
            <div className="bar light" style={{height: '75px'}}></div>
            <span>F</span>
        </div>

        <div className="chart-item">
            <div className="bar light" style={{height: '70px'}}></div>
            <span>S</span>
        </div>

        <div className="chart-item">
            <div className="bar light" style={{height: '65px'}}></div>
            <span>S</span>
        </div>

    </div>

    <button className="start-btn">
        <i className="fa-solid fa-play"></i>
        Start Running
    </button>

</div>
  )
}
