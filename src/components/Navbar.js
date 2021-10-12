import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () =>{

    return(
        <nav>
        <div className="nav-wrapper blue">
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li key="home" className="navbar-key"><Link to="/">Home</Link></li>
            <li key="analytics" className="navbar-key"><Link to="/analytics">Analytics</Link></li>
          </ul>
        </div>
      </nav>
    )

}

export default Navbar