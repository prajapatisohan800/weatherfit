import React from 'react'
import "./one_day_data.scss"

export default function One_day_data() {
  return (
   <div class="hourly-card">
    <div class="card-header">
        <h3>Hourly Forecast</h3>
        <a href="#">View all <span>→</span></a>
    </div>

    <div class="forecast-wrapper">

        <div class="forecast-item active">
            <p class="time">Now</p>

            <img src="https://dummyimage.com/50x50/ffd54f/ffffff.png&text=☀" alt="weather"/>

            <h2>32°C</h2>
        </div>

        <div class="forecast-item">
            <p class="time">11 AM</p>

            <img src="https://dummyimage.com/50x50/fbc02d/ffffff.png&text=☀" alt="weather"/>

            <h2>33°C</h2>
        </div>

        <div class="forecast-item">
            <p class="time">12 PM</p>

            <img src="https://dummyimage.com/50x50/fbc02d/ffffff.png&text=☀" alt="weather"/>

            <h2>34°C</h2>
        </div>

        <div class="forecast-item">
            <p class="time">1 PM</p>

            <img src="https://dummyimage.com/50x50/64b5f6/ffffff.png&text=☂" alt="weather"/>

            <span class="rain">30%</span>

            <h2>33°C</h2>
        </div>

        <div class="forecast-item">
            <p class="time">2 PM</p>

            <img src="https://dummyimage.com/50x50/64b5f6/ffffff.png&text=☂" alt="weather"/>

            <span class="rain">40%</span>

            <h2>31°C</h2>
        </div>

        <div class="forecast-item">
            <p class="time">3 PM</p>

            <img src="https://dummyimage.com/50x50/64b5f6/ffffff.png&text=☂" alt="weather"/>

            <span class="rain">60%</span>

            <h2>30°C</h2>
        </div>

        <div class="forecast-item">
            <p class="time">4 PM</p>

            <img src="https://dummyimage.com/50x50/90caf9/ffffff.png&text=☁" alt="weather"/>

            <h2>28°C</h2>
        </div>

    </div>
</div>
  )
}
