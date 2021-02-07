import React from 'react'
import _ from 'lodash'
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


export default () => (
  <div className="navigation">
    {_.map(ROUTES, r => (
      <div key={r.label} className='navigation__item'>
        <NavLink to={r.route}>{r.label}</NavLink>
      </div>
    ))}
  </div>
)