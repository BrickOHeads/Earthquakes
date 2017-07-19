import React, { Component } from 'react';
import '../styles/App.css';
import EarthquakeList from './earthquakelist.js';
import EarthquakeInfo from './EarthquakeInfo.js';


//import earthquake list and earthquake info..   ./earth..'

class App extends Component {
  render() {
    return (

      <div className="App">
        <div className = "title">
          <div className="my-header">Earthquakes!
          </div>

           <EarthquakeInfo />
           <EarthquakeList />

        </div>

      </div>
    );
  }
}

export default App;
