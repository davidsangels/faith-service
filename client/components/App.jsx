import React from 'react';
import Carousel from './Carousel';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>More places to stay</h1>
        <Carousel data={this.props.data} />
      </div>
    );
  }
}

export default App;
