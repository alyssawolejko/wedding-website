import React from 'react';
import _ from 'lodash';
import Header from './components/Header'
import OurStory from '../../features/OurStory'


export default class Home extends React.Component {
  
  render(){
    return (
      <div>
        <Header />
        <OurStory />
      </div>
    )
  }
}