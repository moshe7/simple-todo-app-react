import React, { Component } from 'react';

class InputTodo extends Component {
  state = {
    title: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodoProps(this.state.title);
    this.setState({
      title: '',
    });
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          className="input-text"
          type="text"
          placeholder="Add Todo.."
          onChange={this.onChange}
          value={this.state.title}
          name="title"
        />
        <input type="submit" className="input-submit" value="Submit" />
      </form>
    );
  }
}

export default InputTodo;
