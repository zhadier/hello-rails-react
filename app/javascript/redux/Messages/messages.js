// constants
const GET_MESSAGES = 'messages/GET_MESSAGES';

// initial state
const initialState = 'Hello World';

// action creators
export const getMessages = (payload) => ({
  type: GET_MESSAGES,
  payload,
});

// thunk action functions

export const getMessagesFromAPI = () => async (dispatch) => {
  await fetch(`v1/messages.json`)
    .then((response) => response.json())
    .then((json) => {
      dispatch(getMessages(json.message.greeting));
    })
    .catch((err) => {
      console.log(err);
    });
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default reducer;
