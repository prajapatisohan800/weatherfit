import React from 'react'
import {Outlet} from 'react-router-dom'
import Sidebar from '../component/sidebar.jsx'
import Navbar from '../component/navbar.jsx'

export default function Web_layout() {
    return (
        <div >
             <div><Sidebar/></div>
            <div>
                <div><Navbar/></div> 
                 <div>
                    <main><Outlet/></main>
                </div> 
            </div>
        </div>
    )
}