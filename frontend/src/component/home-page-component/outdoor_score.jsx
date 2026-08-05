import React from 'react'
import './outdoor_score.scss'

export default function Outdoor_score() {
  return (
    
<div class="score-card">

    <div class="heading">
        <span class="star">★</span>
        <h3>Outdoor Score</h3>
    </div>


    <div class="score-content">

        <div class="circle">

            <div class="circle-inner">
                <h1>92%</h1>
            </div>

        </div>


   
        <div class="score-text">

            <h2>Excellent</h2>

            <p>
                Perfect day for<br/>
                outdoor activities!
            </p>

        </div>

    </div>



    <div class="activities">

        <div>🏃</div>
        <div>🚴</div>
        <div>📷</div>
        <div>🚶</div>

    </div>


</div>

  )
}
