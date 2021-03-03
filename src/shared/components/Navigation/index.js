import React, { useState } from 'react'
import _ from 'lodash'
import { IoMenu, IoClose } from "react-icons/io5";

import {
  NavLink
} from "react-router-dom"
import './Navigation.scss'

const ROUTES = [
  {
    label: 'Home',
    route: '/'
  }, 
  {
    label: 'Venue', 
    route: '/venue'
  },
  {
    label: 'Accomodations',
    route: '/accomodations'
  },
  {
    label: 'Local Attractions',
    route: '/attractions'
  },
  {
    label: 'Registry',
    route: '/'
  }
]


export default () => {
  const [menuOpen, toggleMenu] = useState(false);

  return (
    <div className={`navigation ${menuOpen ? 'menu-open': ''} `}>
      <div key="mobile-menu" className='mobile-menu-icon'>
        {menuOpen ? (
          <IoClose color="white" size={30} onClick={() => toggleMenu(!menuOpen)}/>
        ) : (
          <IoMenu color="white" size={30} onClick={() => toggleMenu(!menuOpen)}/>
        )}
      </div>
      <div className="navigation__route-container" style={menuOpen ? { display: 'flex' } : {}}>
        {_.map(ROUTES, r => (
          <div key={r.label} className='navigation__item'>
            <NavLink to={r.route}>{r.label}</NavLink>
          </div>
        ))}
      </div>
    </div>
  )
}