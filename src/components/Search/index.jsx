import React from "react";
import { fetchStockSymbol } from "./../../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function clearSearch(){
      this.setState({ value: "", cursor: 0 });
};

function SymbolSearch ({ dispatch }) {
  let input;
  return (
    <div>
      <form
        onSubmit={event => {
          event.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(fetchStockSymbol(input.value.trim()));
          input.value = "";
        }}
      >
        <input
          placeholder="Stock Symbol"
          required
          ref={node => {
            input = node;
          }}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
}

SymbolSearch.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(SymbolSearch);
