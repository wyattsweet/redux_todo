import React from 'react';
import Redux from 'redux';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Reducer composition abstracts away reducer logic into multiple reducers then lets reducers call each other
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      }
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default: 
      return state;
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
