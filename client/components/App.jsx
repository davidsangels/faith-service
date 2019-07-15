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
        // console.log(data);
        this.setState({
          places: data
        })
      })
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
            <Carousel data={places} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
