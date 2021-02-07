import React, { useState } from 'react';
import _ from 'lodash';
import './index.scss';


const loveMap = [
  {
    title: 'First Date',
    image: require('../../assets/images/first-date.png'),
    hoverImage: require('../../assets/images/image-1.jpg'),
    active: false,
  },
  {
    title: 'Engagement',
    image: require('../../assets/images/engagement.png'), 
    hoverImage: require('../../assets/images/image-1.jpg'),
    active: false
  },
  {
    title: 'Marriage',
    image: require('../../assets/images/marriage.png'),
    hoverImage: require('../../assets/images/image-1.jpg'),
    active: false
  }
]

export default () => {
  const [state, setState] = useState(loveMap)

  const changeBackground = (title) => {
    const items = _.map(state, item => ({
      ...item,
      active: item.title === title ? true : false
    }))
    setState(items)
  }

  return (
    <div className='loveMap'>
      {_.map(loveMap, ({ title, hoverImage, image, active }) => (
        <div key={title} className="loveMap__container">
          <p>{title}</p>
          <div>
            <div 
              className='loveMap__container__item' 
              style={{ backgroundImage: `url(${active ? hoverImage : image})` }}
              onMouseLeave={() => setState(loveMap)}
              onMouseOver={() => changeBackground(title)}>
            </div>
            <div class="overlay"></div>
          </div>
        </div>
      ))}
  </div>
  )
}
