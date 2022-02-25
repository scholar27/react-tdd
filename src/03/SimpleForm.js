import React, { Component, PropTypes } from 'react';

class SimpleForm extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      current: '',
      disabled: true,
      
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDisabled = this.handleDisabled.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleDisabled(){
    this.setState({disabled: false})
  }

  handleChange(event) {
    this.setState({current: event.target.value})
  }

  handleSubmit() {
    let input = this.state.input;
    let current = this.state.current
    input.concat(current)
  }

  render() {
    return (
      <div className='add-new-form'>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="add-new-song">Add new song</label>
          <input onChange={this.handleChange, this.handleDisabled} type="text" id="add-new-song" placeholder='Enter your favorite song...' />
          <button  disabled={this.state.disabled} type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

SimpleForm.PropTypes = {
};

export default SimpleForm;
