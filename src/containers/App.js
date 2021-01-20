import React, { Component } from 'react';
import CardArray from '../components/CardArray';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: '',
    };
  }
  onChange = (event) => {
    this.setState({
      searchField: event.target.value,
    });
  };

  componentDidMount() {
    
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => this.setState({ robots: data }));
  }

  render() {
    const { robots, searchField } = this.state;
    const filterRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    if (!robots.length) return <h1>Loading.....</h1>;
    else {
      return (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <div className='pa2'>
            <SearchBox onChange={this.onChange} />
          </div>
          <ErrorBoundary>
            <Scroll>
              <CardArray robots={filterRobots} />
            </Scroll>
          </ErrorBoundary>
        </div>
      );
    }
  }
}
export default App;
