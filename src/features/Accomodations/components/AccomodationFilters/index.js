import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import Divider from '../../../../shared/components/Divider'

import './AccomodationFilters.scss'
const options = [
  { value: 'hotels', label: 'Hotels' },
  { value: 'bbs', label: 'Bed & Breakfast'},
  { value: 'airbnb', label: 'AirBNB' },
]
const animatedComponents = makeAnimated();

export default ({ handleChange }) => (
  <>
    <Select 
      className='select'
      options={options} 
      onChange={handleChange}
      isMulti
      closeMenuOnSelect={false}
      components={animatedComponents}
    />
    <Divider /> 
  </>
)