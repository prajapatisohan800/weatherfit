import React from 'react'
import Home_nav from './home-page-component/home_nav'
import Persent_data_img from './home-page-component/persent_data_img'
import Sun_moon_data from './home-page-component/sun_moon_data'
import One_day_data from './home-page-component/one_day_data'
import Week_data from './home-page-component/week_data'
import Rain_forecast from './home-page-component/rain_forecast'
import Running_tracker from './home-page-component/running_tracker'
import Home_compase from './home-page-component/home_compase'
import Home_timer from './home-page-component/home_timer'
import Air_quality from './home-page-component/air_quality'
import Uv_index from './home-page-component/uv_index'
import Running_timer from './home-page-component/running_timer'
import Outdoor_score from './home-page-component/outdoor_score'

export default function Home() {
  return (
    <div className='container-fluid' style={{backgroundColor:"#f9f9f9",padding:"20px"}}>
        <div className='row'>
            <div className='col-12'><Home_nav/> </div>
        </div>

        <div className='row mb-4'>
            <div className='col-lg-4 col-sm-12' ><Persent_data_img/> </div>
            <div className='col-lg-5 col-sm-12' >
              <div className='col-12 mb-2'> <One_day_data/></div>
              <div className='col-12'> <Week_data/> </div>
            </div>
            <div className='col-lg-3 col-sm-12' ><Sun_moon_data/></div>
        </div>

        <div className='row mb-4'>
          <div className='col-lg-3 col-md-6 col-sm-12'><Rain_forecast/></div>
          <div className='col-lg-3 col-md-6 col-sm-12'><Running_tracker/></div>
          <div className='col-lg-3 col-md-6 col-sm-12'><Home_compase/></div>
          <div className='col-lg-3 col-md-6 col-sm-12'><Home_timer/></div>
        </div>

         <div className='row '>
          <div className='col-lg-3 col-md-6 col-sm-12'><Air_quality/></div>
          <div className='col-lg-3 col-md-6 col-sm-12'><Uv_index/></div>
          <div className='col-lg-3 col-md-6 col-sm-12'><Running_timer/></div>
          <div className='col-lg-3 col-md-6 col-sm-12'><Outdoor_score/></div>
        </div>
    </div>
  )
}
