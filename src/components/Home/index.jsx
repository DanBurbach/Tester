import React, { Component } from "react";

class Home extends Component {

    
  render() {
    return (
      <div>
        <div> Home </div>
        <form>
          <label>
            <input type="text" name="search" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
    }
}

export default Home;