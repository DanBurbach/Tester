import React from 'react';
import PropTypes from 'prop-types';

const CharacterDisplay = (props) => {
  return (
    <div>
      <ul className="cards">
        <li className="card">
          <h3>{props.body}</h3>
            <p>
              Username: {props.username}
              Name: {props.name}
              <br/>
             <img src={props.image} alt='user_image'/>
            </p>
        </li>
      </ul>
    </div>
  );
};

CharacterDisplay.propTypes = {
  body: PropTypes.string,
  username: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string
};

export default CharacterDisplay;