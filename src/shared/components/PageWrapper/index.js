import React from 'react'
import './PageWrapper.scss'

export default ({ children, title }) => (
  <div className="page-content">
    <h2>{title}</h2>
    {children}
  </div>
)

