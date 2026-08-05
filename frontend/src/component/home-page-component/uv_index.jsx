import React from 'react'
import './uv_index.scss'

export default function Uv_index() {
  return (
    <div class="uv-card">

    <div class="uv-title">
        <span class="sun_uv">☀</span>
        <h3>UV Index</h3>
    </div>


    <div class="uv-content">

        <div class="uv-circle">
            <span>6</span>
        </div>

        <div class="uv-info">
            <h2>High</h2>
            <p>Protection recommended</p>
        </div>

    </div>


    <div class="uv-scale">

        <div class="line">
            <div class="indicator"></div>
        </div>

        <div class="numbers">
            <span>0</span>
            <span>2</span>
            <span>4</span>
            <span class="active">6</span>
            <span>8</span>
            <span>10</span>
            <span>12+</span>
        </div>

    </div>

</div>
  )
}
