import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [],
      current: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkCurrentState = this.checkCurrentState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  checkCurrentState() {
          return <h1>Nothing here yet :( </h1>
    
  }

  handleChange(event) {
    this.setState({current: event.target.value})
  }

  handleSubmit() {
    let {names, current} = this.state;
    names.push(current)
  }

  displayNames() {
    const names = this.state.names;
    return(
      <ul>
      {names.map((name) => <li>{name}</li>)}
      </ul>
    )
    
  }

  render() {
    return (
      <div className='content'>
        {this.state.names.length > 0 ? this.displayNames() : <h1>Nothing here yet :(</h1>}
        <input type='text' onChange={this.handleChange}></input>
        <button type="submit" value="Submit" onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default List;
