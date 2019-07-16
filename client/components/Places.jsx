import React from 'react';

const Places = props => (
  <div className="places">
    {/* <img src={props.place.place_image} /> */}
    <img src="https://a0.muscache.com/im/pictures/74dc345d-c45c-4fb8-93d3-5eaab6ed650d.jpg?aki_policy=large" />
    <div style={{ marginTop: '3px' }}>
      <span id="typeAndPlace" style={{ color: 'rgb(118, 118, 118)' }}>
        {props.place.accommodation_type}
        <span aria-hidden="true"> · </span>
        {props.place.place_location}
      </span>
    </div>
    <div id="placeName">{props.place.place_name}</div>
    <div>${props.place.price}/night</div>
    <div id="rating">{props.place.rating}</div>
  </div>
);




export default Places;
