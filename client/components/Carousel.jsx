import React from 'react';
import Places from './Places';

const Carousel = props => (
  <div className="parent">
    { (props.data).map(place => <Places place={place} />) }
  </div>
);

export default Carousel;
