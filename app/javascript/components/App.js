import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import HelloRailsReact from './HelloRailsReact';
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={'Home!'} />
            <Route path="/hello" element={<HelloRailsReact />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
