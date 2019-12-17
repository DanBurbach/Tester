import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import posed from "react-pose";
// import { keyframes } from "popmotion";

const Box = posed.div({
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
});

const Results = ({ currentStockSymbolArray }) => {
  return (
    <Box
      className="box"
      pose={currentStockSymbolArray.length > 0 ? "visible" : "hidden"}
    >
      <div>
        <em>List of messages</em>
        {currentStockSymbolArray.map(messages => {
          return (
            <ul>
              <li key={messages.id} className="card">
                <h3>{messages.body}</h3>
                <p>
                  Username: {messages.user.username}
                  Name: {messages.user.name}
                  <br />
                  <img src={messages.user.avatar_url} alt="user_image" />
                </p>
              </li>
            </ul>
          );
        })}
      </div>
    </Box>
  );
};

Results.propTypes = {
  currentStockSymbolArray: PropTypes.arrayOf(Object),
  name: PropTypes.string,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    currentStockSymbolArray: state.currentStockSymbolArray
  };
};

export default connect(mapStateToProps)(Results);
