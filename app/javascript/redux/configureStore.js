import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './Messages/messages';

const store = configureStore({ reducer: { messages: messagesReducer } });
export default store;
