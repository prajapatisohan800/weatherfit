import React from 'react'
// import { Search, Crosshair, MapPin, Sun, Moon, Menu } from "lucide-react";
import "./home_nav.scss";

export default function Home_nav() {
  return (


    <nav className="navbar navbar-expand-lg weather-navbar">
      <div className="container-fluid">

        {/* Logo */}

        <a className="navbar-brand d-flex align-items-center" href="#">
          <div className="logo-box"></div>

          <span className="logo-text">
            Weather<span>Fit</span>
          </span>
        </a>

        {/* Mobile Toggle */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbar"
        >

          {/* Search */}

          <div className="search-box mx-auto">

            <Search size={18} />

            <input
              type="text"
              placeholder="Search for city..."
            />

            <Crosshair
              size={18}
              className="location-icon"
            />

          </div>

          {/* Right Side */}

          <div className="d-flex align-items-center ms-auto gap-3">

            <div className="location-box">

              <MapPin size={18} />

              <span>Jaipur, Rajasthan</span>

            </div>

            <div className="theme-box">

              <Sun size={18} />

              <Moon size={18} />

            </div>

            <button className="menu-btn">

              <Menu size={22} />

            </button>

          </div>

        </div>
      </div>
    </nav>
  )
}