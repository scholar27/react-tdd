import { setAttributeValue } from 'jsdom/lib/jsdom/living/attributes';
import React, { Component, PropTypes } from 'react';

class Dropdown extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
      currentValue: 'item1c',
      options: [    
        'item1t', 'item2', 'item3'
      ],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleCLick = this.handleCLick.bind(this);
    this.dropdown = this.dropdown.bind(this);

  }

  handleChange(option) {
    this.setState({currentValue: option})
    this.handleCLick();
  }
  handleCLick() {
    this.setState({toggle: !this.state.toggle})
  }

  dropdown(){
    const options = this.state.options;
    return (
      <ul value={this.state.currentValue} className='dropdown__menu'>
      {options.map((option) => 
        (<li value={option} key={option} onClick={() => {this.handleChange(option)}}>{option}</li>))
      }
      </ul>

    )
  }

  render() {
    return (
      <div className='dropdown'>
        <div className='dropdown__toggle' onClick={this.handleCLick}>
          {this.state.currentValue}
        </div>
        {this.state.toggle ? this.dropdown() : null}
      </div>
    )
  }
}

Dropdown.propTypes = {
};

export default Dropdown;
