import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stock: "",
      symbolList: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  handleChange(event) {
    let data = event.target.value.toUpperCase()
    this.setState({ stock: data });
  }

  handleSubmit = async(event) => {
    event.preventDefault();
    var enteredValue = this.state.stock;
    var url =
        fetch('https://api.stocktwits.com/api/2/streams/symbol/' + enteredValue + '.json');
        this.setState({ symbolList : url})
    //   alert("A name was submitted: " + this.state.value);
    console.log(this.state.symbolList);
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
          <input type="submit" value="Submit" onClick={this.handleSubmit}/>
          <button value="Clear" onClick={this.clearSearch}>Clear Search List</button>
        </form>
        <br/>
        <div> {this.state.stock} </div>
      </div>
    );
  }
}

export default Home;