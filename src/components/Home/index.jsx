import React, { Component } from "react";

// import SymbolSearch from './../Search';
// import Results from '../Results';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stock: "",
      symbolList: [],
      hasErrors: false,
      isLoaded: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDisplaySymbolMessages = this.handleDisplaySymbolMessages.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

    handleChange = async(event) => {
        this.setState({ stock: event.target.value.toUpperCase(), isLoaded: true });
    };

    handleSubmit = async(event) => {
        event.preventDefault();
        var enteredValue = this.state.stock;
        fetch('https://api.stocktwits.com/api/2/streams/symbol/' + enteredValue + '.json')
            .then(results => results.json())
            .then(results => this.setState({ symbolList: results }))
            .catch(() => this.setState({ hasErrors: true }));

        };
        
    handleDisplaySymbolMessages = () => {
        console.log(this.state.stock)
        console.log(this.state.symbolList.messages);
        let list = this.state.symbolList.toString();
        let messageArray = list ? list.split(',') : [];

        return (
          <ul>
            {messageArray.map((index, symbolList) => (
              <li key={index}>
                {symbolList.messages}
              </li>
            ))}
          </ul>
        );
    }

  clearSearch = () => {
      this.setState({ value: "", cursor: 0})
  };

  render() {
      let { stock } = this.state;
        return (
        <div>
            <div> Home </div>
            {/* <SymbolSearch/> */}
            <form>
            <label>
                $
                <input
                type="text"
                placeholder="Stock Symbol"
                onChange={this.handleChange}
                name="search"
                required
                />
            </label>
            <input type="submit" value="Submit" onClick={this.handleSubmit} />
            <button value="Clear" onClick={this.clearSearch}>
                Clear Search List
            </button>
            </form>
            <br />
            <div> {stock} </div>
            <br/>

            {/* return results here =========== */}

            <div>
                {this.handleDisplaySymbolMessages()}
            </div>

        </div>
        );
    }
  
}

export default Home;