import React from 'react';


const Places = (props) => {
  const { place } = props;
  const stars = [];

  for (let i = 0; i < place.rating; i++) {
    stars.push(1);
  }

  const starsToFill = 5 - stars.length;
  for (let j = 0; j < starsToFill; j++) {
    stars.push(0);
  }

  let ratingStars = stars.map(star => {
    if (star === 1) {
      return (<img src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAwMCAxMDAwJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyMwMDg0ODknPjxwYXRoIGQ9J005NzIgMzgwYzkgMjggMiA1MC0yMCA2N0w3MjUgNjE5bDg3IDI4MGMxMSAzOS0xOCA3NS01NCA3NS0xMiAwLTIzLTQtMzMtMTJMNDk5IDc5MCAyNzMgOTYyYTU4IDU4IDAgMCAxLTc4LTEyIDUwIDUwIDAgMCAxLTgtNTFsODYtMjc4TDQ2IDQ0N2MtMjEtMTctMjgtMzktMTktNjcgOC0yNCAyOS00MCA1Mi00MGgyODBsODctMjc5YzctMjMgMjgtMzkgNTItMzkgMjUgMCA0NyAxNyA1NCA0MWw4NyAyNzdoMjgwYzI0IDAgNDUgMTYgNTMgNDB6Jy8+PC9zdmc+" style={{ height: '10px', width: '10px' }} />);
    } else {
      return (<img src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAwMCAxMDAwJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyNEOEQ4RDgnPjxwYXRoIGQ9J005NzIgMzgwYzkgMjggMiA1MC0yMCA2N0w3MjUgNjE5bDg3IDI4MGMxMSAzOS0xOCA3NS01NCA3NS0xMiAwLTIzLTQtMzMtMTJMNDk5IDc5MCAyNzMgOTYyYTU4IDU4IDAgMCAxLTc4LTEyIDUwIDUwIDAgMCAxLTgtNTFsODYtMjc4TDQ2IDQ0N2MtMjEtMTctMjgtMzktMTktNjcgOC0yNCAyOS00MCA1Mi00MGgyODBsODctMjc5YzctMjMgMjgtMzkgNTItMzkgMjUgMCA0NyAxNyA1NCA0MWw4NyAyNzdoMjgwYzI0IDAgNDUgMTYgNTMgNDB6Jy8+PC9zdmc+" style={{ height: '10px', width: '10px' }} />);
    }
  });

  return (
    <div className="places">
      {/* <img src={props.place.place_image} /> */}
      <img src="https://a0.muscache.com/im/pictures/74dc345d-c45c-4fb8-93d3-5eaab6ed650d.jpg?aki_policy=large" />
      <div style={{ marginTop: '3px' }}>
        <span id="typeAndPlace" style={{ color: 'rgb(118, 118, 118)' }}>
          {place.accommodation_type}
          <span aria-hidden="true"> · </span>
          {place.place_location}
        </span>
      </div>
      <div id="placeName">{place.place_name}</div>
      <div id="price">${place.price}/night</div>
      <div id="rating">
        {ratingStars} {place.rating}
      </div>
    </div>
  )
};




export default Places;
