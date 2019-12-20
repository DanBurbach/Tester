import React, { Component } from "react";
import uuid from "uuid";

// import SymbolSearch from './../Search';
// import Results from '../Results';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stock: "",
      symbolList: {},
      resultSymbol: {},
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
      const apiUrl = "https://api.stocktwits.com/api/2/streams/symbol";
      const enteredData = this.state.stock;
      const stocktwitsQuery = `${apiUrl}/${enteredData}.json`;
        fetch(stocktwitsQuery)
        .then(response => response.json())
        .then(result => this.setState({ symbolList: result }))
        .catch(() => this.setState({ hasErrors: true }));
        this.handleDisplaySymbolMessages();
    };
        
    handleDisplaySymbolMessages = (body) => {
        console.log(this.state.symbolList.messages);

        const key = uuid.v4();
        const list = JSON.stringify(this.state.symbolList.messages);

        // const list = this.state.symbolList.toString();
        // let list = JSON.parse(this.state.symbolList.messages);
        const messageArray = list ? list.split(',') : [];

        let listMessages = messageArray.map((messages) => (
          <ol key={key}>{messages}</ol>
        ));

        // return (
        //   <div>
        //       <ul>
        //         {listMessages}
        //       </ul>
        //   </div>
        // );
    }

    clearSearch = () => {
        this.setState({ value: "", cursor: 0})
    };

  render() {
      let { stock } = this.state;
        return (
          <div>
            <div> Home </div>
            {/* <SymbolSearch /> */}
            <button value="Clear" onClick={this.clearSearch}>
              Clear Search List
            </button>
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
            </form>
            <br />
            <div> {stock} </div>
            <br />

            {/* return results here =========== */}

            <div>{this.handleDisplaySymbolMessages()}</div>
          </div>
        );
    }
  
}

export default Home;

