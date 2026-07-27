import React from 'react'
import Home_nav from './home-page-component/home_nav'
import Persent_data_img from './home-page-component/persent_data_img'
import Sun_moon_data from './home-page-component/sun_moon_data'

export default function Home() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12'><Home_nav/> </div>
        </div>

        <div className='row'>
            <div className='col-lg-4 col-sm-12' ><Persent_data_img/> </div>
            <div className='col-lg-5 col-sm-12' > days data</div>
            <div className='col-lg-3 col-sm-12' ><Sun_moon_data/></div>
        </div>
    </div>
  )
}
