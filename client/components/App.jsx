import React from 'react';
import Carousel from './Carousel';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      places: [],
      filteredPlaces: [],
      rightArrow: false,
      start: 0
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/testing')
      .then(response => response.json())
      .then((data) => {
        // console.log(data);
        this.setState({
          places: data
        });
      });
  }

  handleRightArrow(event) {
    console.log('buddin ;-)');
    const nextThreePlaces = [...this.state.places];
    let newStart = this.state.start + 3;
    let newEnd = newStart + 3;

    this.setState({
      rightArrow: true,
      start: newStart,
      filteredPlaces: nextThreePlaces.slice(newStart, newEnd)
    });
  }

  render() {
    const { places } = this.state;
    const { filteredPlaces } = this.state;
    const { rightArrow } = this.state;
    return (
      <div className="main">
        <section>
          <div style={{ marginTop: '16px', marginBottom: '24px' }}>
            <div style={{ marginBottom: '24px' }}>
              <h2 tabIndex="-1" className="header1">
                <div className="title">
                  <span>More places to stay</span>
                </div>
              </h2>
            </div>
            <Carousel data={rightArrow ? filteredPlaces : places} />
            <div onClick={() => this.handleRightArrow(true)}>></div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
