import React from 'react';
import Redux from 'redux';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import todoApp from './redux/todoApp'

const { createStore } = Redux;
const store = createStore(todoApp);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
