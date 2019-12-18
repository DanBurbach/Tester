import React, { Component } from "react";
import uuid from "uuid";

import SymbolSearch from './../Search';
// import Results from '../Results';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stock: "",
      symbolList: '',
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
        var enteredValue = this.state.stock;
        fetch('https://api.stocktwits.com/api/2/streams/symbol/' + enteredValue + '.json')
        // .then(res => {
            
        //     var data = res.data;
        //     var types = [];
        //     for (let i = 0; i < data.types.length; i++) types.push(data.types[i].body);
            
        //     const stockMessages = {
        //         id: data.id,
        //         body: data.body,
        //         name: data.name,
        //         username: data.username,
        //         avatar: data.avatar_url,
        //     };
            
        //     this.setState({
        //         symbolList: stockMessages
        //     });
        // })
        .then(res => res.json())
        .then(result => this.setState({ symbolList: result }))
        .catch(() => this.setState({ hasErrors: true }));
        event.preventDefault();
    };
        
    handleDisplaySymbolMessages = () => {
        console.log(this.state.symbolList);
        // let list = JSON.parse(this.state.symbolList)
        // console.log(this.state.symbolList.messages);

        const key = uuid.v4();
        const list = JSON.stringify(this.state.symbolList.messages);

        // const list = this.state.symbolList.toString();
        const messageArray = list ? list.split(',') : [];

        // const listing = this.state.symbolList
        //   .filter(symbol => symbol.messages.includes(this.state.symbolList))
        //   .map(searchedSymbol => {
        //     return (
        //       <tr key={searchedSymbol.name}>
        //         <td>{searchedSymbol.name}</td>
        //       </tr>
        //     );
        //   });
        
        let listMessages = messageArray.map((messages) => (
          <li key={key}>{messages}</li>
        ));

        return (
          <div>
              {listMessages}
          </div>
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
            <SymbolSearch />
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