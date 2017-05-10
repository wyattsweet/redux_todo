import React from 'react';
import Redux from 'redux';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// todo reducer
const todo = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
    return [
      ...state,
      {
        id: action.id,
        text: action.text,
        completed: false
      }
    ]
    default: 
      return state;
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
