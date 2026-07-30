import React from 'react'
import "./week_data.scss"

export default function Week_data() {
  return (
   <div class="forecast-card">

    <div class="forecast-header">
        <h3>7-Day Forecast</h3>

        <a href="#">
            View all →
        </a>
    </div>

    <div class="forecast-days">

        <div class="day-card">
            <p class="day">Mon</p>

            <img src="https://dummyimage.com/55x55/fdb813/ffffff.png&text=☀"/>

            <h4>32° / 26°</h4>
        </div>

        <div class="day-card">
            <p class="day">Tue</p>

            <img src="https://dummyimage.com/55x55/fdb813/ffffff.png&text=⛅"/>

            <h4>33° / 26°</h4>
        </div>

        <div class="day-card">
            <p class="day">Wed</p>

            <img src="https://dummyimage.com/55x55/5fa8ff/ffffff.png&text=🌧"/>

            <h4>31° / 25°</h4>
        </div>

        <div class="day-card">
            <p class="day">Thu</p>

            <img src="https://dummyimage.com/55x55/5fa8ff/ffffff.png&text=🌧"/>

            <h4>30° / 25°</h4>
        </div>

        <div class="day-card">
            <p class="day">Fri</p>

            <img src="https://dummyimage.com/55x55/fdb813/ffffff.png&text=⛅"/>

            <h4>32° / 26°</h4>
        </div>

        <div class="day-card">
            <p class="day">Sat</p>

            <img src="https://dummyimage.com/55x55/fdb813/ffffff.png&text=☀"/>

            <h4>33° / 27°</h4>
        </div>

        <div class="day-card">
            <p class="day">Sun</p>

            <img src="https://dummyimage.com/55x55/fdb813/ffffff.png&text=⛅"/>

            <h4>32° / 26°</h4>
        </div>

    </div>

</div>
  )
}
