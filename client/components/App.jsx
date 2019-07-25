import React from 'react';
import Carousel from './Carousel';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      places: [],
      filteredPlaces: [],
      start: 0
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/testing')
      .then(response => response.json())
      .then((data) => {
        // console.log(data);
        this.setState({
          places: data.slice(0, 12),
          filteredPlaces: data.slice(0, 3)
        });
      });
  }

  handleLeftArrow(event) {
    const { start } = this.state;
    const { places } = this.state;

    if (start < 1) {
      console.log('back to start')
      return;
    }

    const prevThreePlaces = [...places];
    const newEnd = start + 2;
    const newStart = newEnd - 3;

    this.setState({
      start: newStart,
      filteredPlaces: prevThreePlaces.slice(newStart, newEnd)
    });
  }

  handleRightArrow(event) {
    // console.log('buddin ;-)');
    const { start } = this.state;
    const { places } = this.state;

    if (start > 8) {
      console.log('reached end')
      return;
    }

    const nextThreePlaces = [...places];
    const newStart = start + 1;
    const newEnd = newStart + 3;

    this.setState({
      start: newStart,
      filteredPlaces: nextThreePlaces.slice(newStart, newEnd)
    });
  }

  render() {
    const { places } = this.state;

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
            <div className="carouselDiv">
              {this.state.start ? <div id="leftArrow" onClick={() => this.handleLeftArrow(true)}></div> : <div /> }
              {/* <div id="leftArrow" onClick={() => this.handleLeftArrow(true)}></div> */}
              <Carousel data={places} />
              {/* <div id="rightArrow" onClick={() => this.handleRightArrow(true)}></div> */}
              {(this.state.start < 9) ? <div id="rightArrow" onClick={() => this.handleRightArrow(true)}></div> : <div /> }
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
