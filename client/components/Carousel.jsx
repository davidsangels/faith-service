import React from 'react';
import Places from './Places';

const Carousel = (props) => {
  const { data } = props;
  return (
    <div className="parent">
      {data.map(place => <Places key={place.id} place={place} />)}
    </div>
  );
};


// (
// <div className="parent">
//   {data.map(place => <Places place={place} />) }
// </div>
// );

export default Carousel;
