import React, { useState } from 'react'
import _ from 'lodash'
import AccomodationFilter from './components/AccomodationFilters'
import AirBNB from './components/AirBNBEmbeds'


export default () => {

  const [selected, setSelected] = useState([]);


  const handleFilterChange = (selected) => {
    setSelected(_.map(selected, s => s.value))
  }

  const renderResults = () => {
    if (!selected.length) return null
    let results = []
    if (_.includes(selected, 'airbnb')){
      results.push(<AirBNB key='airbnb'/>)
    }
    return _.map(results, r => r)
  }

  return (
    <div>
      <AccomodationFilter handleChange={handleFilterChange} />
      <div className='results'>
        {renderResults()}
      </div>
    </div>

  )
}
