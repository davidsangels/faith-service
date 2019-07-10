import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const data = [
  {
    photo: 'https://loremflickr.com/320/240/dog',
    name: 'Faith',
    location: 'Shibuya District',
    stars: 5,
    reviewNum: 120
  },
  {
    photo: 'https://loremflickr.com/320/240/dog',
    name: 'ABC',
    location: 'Tehama street',
    stars: 2,
    reviewNum: 220
  },
  {
    photo: 'https://loremflickr.com/320/240/dog',
    name: 'Dorrisssss',
    location: 'I dunno, somewhere sitting',
    stars: 5,
    reviewNum: 222
  }
];

ReactDOM.render(<App data={data} />, document.getElementById('app'));
