import React from 'react'
import "./home_timer.scss"

export default function Home_timer() {
  return (
    <div className="timer-card">

    <div className="timer-header">
        <i className="bi bi-stopwatch"></i>
        <h3>Timer</h3>
    </div>

    <div className="timer-content">

        <h1 className="timer-time">00:00:00</h1>

        <p className="timer-label">Stopwatch</p>

    </div>

    <div className="timer-action">

        <button className="start-btn">
            <i className="bi bi-play-fill"></i>
            Start
        </button>

        <button className="reset-btn">
            <i className="bi bi-arrow-counterclockwise"></i>
        </button>

    </div>

</div>
  )
}
