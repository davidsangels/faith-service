import React from 'react';

const Places = props => (
  <div className="places">
    <img src={props.place.place_image} />
    <div>{props.place.accommodation_type} - {props.place.place_location}</div>
    <div>{props.place.place_name}</div>
    <div>${props.place.price}/night</div>
    <div>{props.place.rating}</div>
  </div>
);

// const Places = props => (
//   <div className="places">
//     {console.log(props)}
//     <img src={props.place.photo} />
//     <div>{props.place.location}</div>
//     <div>{props.place.name}</div>
//     <div>{props.place.stars}</div>
//     <div>{props.place.reviewNum}</div>
//   </div>
// );


export default Places;
