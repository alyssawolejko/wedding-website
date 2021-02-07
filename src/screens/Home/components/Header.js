import React from 'react';
import ProfileImage from '../../../assets/images/image-1.jpg'

export default () => (
  <div className="header">
    <div className="header__c-img-container" style={{ backgroundImage: require('../../../assets/images/capecod.jpg') }}>    
    </div>
    <div className="header__c-featured">
      <div className="header__c-featured__img-circle">
        <img src={ProfileImage} alt='Profile image' style={{ width: '100%', resizeMode: 'contain' }} />
      </div>
      <h1 className="header__c-featured__title">{`Alyssa & Chris`}</h1>
      <h4 className="header__c-featured__title">{`September 4th, 2021`}</h4>
    </div>
  </div>
)
