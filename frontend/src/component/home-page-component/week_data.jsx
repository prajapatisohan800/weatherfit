import React from 'react'
import "./week_data.scss"

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

            <img src="https://dummyimage.com/55x55/fdb813/ffffff.png&text=☀"/>

            <h4>32° / 26°</h4>
        </div>

        <div className="day-card">
            <p className="day">Tue</p>

            <img src="https://dummyimage.com/55x55/fdb813/ffffff.png&text=⛅"/>

            <h4>33° / 26°</h4>
        </div>

        <div className="day-card">
            <p className="day">Wed</p>

            <img src="https://dummyimage.com/55x55/5fa8ff/ffffff.png&text=🌧"/>

            <h4>31° / 25°</h4>
        </div>

        <div className="day-card">
            <p className="day">Thu</p>

            <img src="https://dummyimage.com/55x55/5fa8ff/ffffff.png&text=🌧"/>

            <h4>30° / 25°</h4>
        </div>

        <div className="day-card">
            <p className="day">Fri</p>

            <img src="https://dummyimage.com/55x55/fdb813/ffffff.png&text=⛅"/>

            <h4>32° / 26°</h4>
        </div>

        <div className="day-card">
            <p className="day">Sat</p>

            <img src="https://dummyimage.com/55x55/fdb813/ffffff.png&text=☀"/>

            <h4>33° / 27°</h4>
        </div>

        <div className="day-card">
            <p className="day">Sun</p>

            <img src="https://dummyimage.com/55x55/fdb813/ffffff.png&text=⛅"/>

            <h4>32° / 26°</h4>
        </div>

    </div>

</div>
  )
}
