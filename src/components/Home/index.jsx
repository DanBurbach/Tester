import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: ('$' + event.target.value).toUpperCase() });
  }

  handleSubmit(event) {
      alert("A name was submitted: " + this.state.value);
      event.preventDefault();
  }

  clearSearch = () => {
      this.setState({ value: "", cursor: 0})
  }

  render() {
    return (
      <div>
        <div> Home </div>
        <form>
          <label>
            $<input
              type="text"
              placeholder="Stock Symbol"
              onChange={this.handleChange}
              name="search"
              required
            />
          </label>
          <input type="submit" value="Submit" />
          <button value="Clear" onClick={this.clearSearch}>Clear</button>
        </form>
        <br/>
        <div> {this.state.value} </div>
      </div>
    );
  }
}

export default Home;