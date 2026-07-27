import { useState } from 'react'
import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom'

const Admin_layout = React.lazy(() => import("./layout/Admin_layout.jsx"));
const Web_layout = React.lazy(() => import("./layout/web_layout.jsx"));

function App() {

  return (
    <>

      {/* <div><h1>jai shree ram</h1></div> */}


      <Routes>
        <Route element={<Admin_layout/>}>

        </Route>
      </Routes>


      <Routes>
        <Route element={<Web_layout/>}>

        </Route>
      </Routes>


    </>
  )
}

export default App
