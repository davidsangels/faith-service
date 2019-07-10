import React from 'react';

const Places = props => (
  <div className="places">
      <img src={props.place.photo} />
    <div>{props.place.location}</div>
    <div>{props.place.name}</div>
    <div>{props.place.stars}</div>
    <div>{props.place.reviewNum}</div>
  </div>
);

export default Places;
