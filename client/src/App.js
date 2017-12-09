import React, { Component } from 'react';
//import Cesium from 'cesium';
import Viewer from "cesium/Source/Widgets/Viewer/Viewer";

class App extends Component {
  componentDidMount() {
//console.log(this.cesiumContainer)
    var viewer = new Viewer(this.cesiumContainer);

  }

  render() {
    return (
      <div className="App">
        <div className="col-sm-9">
          <div id="cesiumContainer" ref={ element => this.cesiumContainer = element }/>
        </div>
        <div className="col-sm-3">
          Hello
        </div>
      </div>
    );
  }
}

export default App;
