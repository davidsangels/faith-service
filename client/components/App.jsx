import React from 'react';
import Carousel from './components/Carousel';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>More places to stay</h1>
        <Carousel />
      </div>
    );
  }
}

export default App;
