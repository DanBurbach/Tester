import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import posed from "react-pose";
// import { keyframes } from "popmotion";

const Box = posed.div({
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
});

const Results = ({ currentResultsArray }) => {
  return (
    <Box
      className="box"
      pose={currentResultsArray.length > 0 ? "visible" : "hidden"}
    >
      <em>List of messages</em>
      {currentResultsArray.map(messages => {
        return (
          <li key={messages.id} className="card">
            <h3>{messages.body}</h3>
            <p>
              Name: {messages.user.name} | Species: {messages.species}
            </p>
            <p>
              Likes: {messages.likes.total} | Gender: {messages.gender}
            </p>
            <p>Origin: {messages.origin.name}</p>
            <p>Location: {messages.location.name}</p>
          </li>
        );
      })}
    </Box>
  );
};

Results.propTypes = {
  currentResultsArray: PropTypes.arrayOf(Object),

  name: PropTypes.string,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    currentResultsArray: state.currentResultsArray
  };
};

export default connect(mapStateToProps)(Results);
