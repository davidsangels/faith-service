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
    <div id="price">${props.place.price}/night</div>
    <div id="rating">
      {
        [0, 0, 0, 0, 0].map(star => <img src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAwMCAxMDAwJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyMwMDg0ODknPjxwYXRoIGQ9J005NzIgMzgwYzkgMjggMiA1MC0yMCA2N0w3MjUgNjE5bDg3IDI4MGMxMSAzOS0xOCA3NS01NCA3NS0xMiAwLTIzLTQtMzMtMTJMNDk5IDc5MCAyNzMgOTYyYTU4IDU4IDAgMCAxLTc4LTEyIDUwIDUwIDAgMCAxLTgtNTFsODYtMjc4TDQ2IDQ0N2MtMjEtMTctMjgtMzktMTktNjcgOC0yNCAyOS00MCA1Mi00MGgyODBsODctMjc5YzctMjMgMjgtMzkgNTItMzkgMjUgMCA0NyAxNyA1NCA0MWw4NyAyNzdoMjgwYzI0IDAgNDUgMTYgNTMgNDB6Jy8+PC9zdmc+" />)
      }
    </div>
  </div>
);




export default Places;
