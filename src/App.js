import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      robots : robots,
      searchfield : ''
    }
  }
  onSearchChange = (event) =>{
    this.setState({
      searchfield : event.target.value,
    })
  }

  render(){
    const filterRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })

    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={filterRobots}/>
      </div>
    )
  }
}

export default App;
