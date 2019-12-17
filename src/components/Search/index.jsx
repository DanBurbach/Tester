import React from "react";
import { fetchStockSymbol } from "./../../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

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
