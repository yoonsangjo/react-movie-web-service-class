import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 0,
  };

  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };
  componentDidMount() {
    console.log('component rendered');
  }
  componentDidUpdate() {
    console.log('I just updated');
  }
  componentWillUnmount() {
    console.log('Goodbye, cruel world');
  }

  render() {
    const { count } = this.state;
    console.log("I'm rendering");
    return (
      <>
        <h1>The number is : {count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </>
    );
  }
}

export default App;
