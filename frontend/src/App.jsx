import { Suspense, useState } from 'react'
import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Frist_layout from './layout/Frist_layout.jsx';
import Home from './component/home.jsx';
import Adashboard from './component/admin/A-dashboard.jsx';
import Dashboard from './component/dashboard.jsx';

const Admin_layout = React.lazy(() => import("./layout/Admin_layout.jsx"));
const Web_layout = React.lazy(() => import("./layout/Web_layout.jsx"));
const frist_layout = React.lazy(() => import("./layout/Frist_layout.jsx"));

function App() {

  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>

        {/* <div><h1>jai shree ram</h1></div> */}


        <Routes>
          <Route element={<Frist_layout/>}>
            <Route path='/' element={<Home />} />
          </Route>
        </Routes>

        <Routes>
          <Route element={<Admin_layout />}>
            <Route path='/A-dashboard' element={<Adashboard />} />
          </Route>
        </Routes>

        <Routes>
          <Route element={<Web_layout />}>
            <Route path="/dashboard" element={<Dashboard/>} />
          </Route>
        </Routes>
      </Suspense>


    </>
  )
}

export default App
