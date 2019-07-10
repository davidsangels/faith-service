import React from 'react';
import Carousel from './Carousel';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      places: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/testing')
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          places: data
        })
      })
  }

  render() {
    const { places } = this.state;
    return (
      <div>
        <h1>More places to stay</h1>
        <Carousel data={places} />
      </div>
    );
  }
}

export default App;
