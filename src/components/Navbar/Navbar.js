import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
       
      <div class="navbar-fixed">
      <nav className="nav-wrapper grey darken-3 ">
          <div className="container">
            <a className="brand-Logo">LOGO</a>

            <ul className="right ">
                <li><a>DASHBOARD</a></li>
                <li><a >STUDIO</a></li>
                <li><a >PREMIUM</a></li>
            </ul>
          </div>
        
      </nav>
      </div>
    
    )
}

export default Navbar
