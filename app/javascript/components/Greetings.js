import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getMessagesFromAPI } from '../redux/Messages/messages';

const Greetings = () => {
  const selected = useSelector((state) => state.messages);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getMessagesFromAPI());
  };

  return (
    <React.Fragment>
      Greeting: {selected}
      <button id="getMessages" onClick={handleClick}>
        Get a Greeting
      </button>
    </React.Fragment>
  );
};

export default Greetings;
