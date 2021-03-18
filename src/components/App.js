import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import HogCard from "./HogCard";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";

class App extends Component {

  state = {
    hogs: hogs
  }
  

  render() {
    return (
      <div className="App">
        <Nav />
        {/* <HelloWorld /> */}
        {/* <div className='ui grid container'> */}
          {hogs.map(
            hog => <HogCard hog={hog} key={hog.name}/>
          )}
        {/* </div> */}
      </div>
    );
  }
}

export default App;
