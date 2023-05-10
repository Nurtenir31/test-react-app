import React from 'react';
import { NavLink } from 'react-router-dom'
import {Link} from 'react-router-dom'
import DashBoard from '../DashBoard/Dashboard'
import Settings from '../Setting/Settings'

const Navbar = () => {
    return (
    <div>

        <ul className='menu'>

                <li><a>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                </a></li>
                <li><a>
                    <NavLink to="/tabs">Tabs demo</NavLink>
                </a></li>
                <li><a>
                 <NavLink to="/settings">Settings</NavLink>
                </a></li>

        </ul>
    </div>
    )
  }
  
  export default Navbar