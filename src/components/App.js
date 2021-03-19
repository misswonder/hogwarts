import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import HogCard from "./HogCard";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";

class App extends Component {

  state = {
    hogs: hogs,
    filteredHogs: hogs.filter(hog => hog.greased),
    filter: false,
    sortBy: ''
  }

  changeFilterState = () => {
    this.setState({
      filter: !this.state.filter
    })
  }

  changeSortState = (sort) => {
    this.setState({
      sortBy: sort
    })
  }

  sortBy = () => {
    switch(this.state.sortBy){
      case 'weight':
        return this.setState({ hogs: hogs.sort((a,b)=>{return a.weight-b.weight})});
      case 'name':
        return this.setState({hogs: hogs.sort((a,b)=>{return a.name.localeCompare(b.name)})});
      default:
        break
    }
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <div className='filterWrapper'>
          {/* filter button */}
          <button onClick={this.changeFilterState} className='filterButton'>Filter by Greased</button>
          {/* sort by the name */}
          <button onClick={() => {this.changeSortState('name'), this.sortBy()}} className='sortName'>Sort by Name</button>
          {/* sort by weight */}
          <button onClick={() => {this.changeSortState('weight'), this.sortBy()}} className='sortWeight'>Sort by Weight</button>

        </div>
        <div className='ui grid container app'>
          <div className='sixteen wide column centered'>
            {this.state.filter ? (this.state.filteredHogs.map(hog => <HogCard hog={hog} key={hog.name}/>)) : (this.state.hogs.map(hog => <HogCard hog={hog} key={hog.name}/>))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
