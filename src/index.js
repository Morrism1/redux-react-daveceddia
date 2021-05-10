// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import reducer from './reducer/index';
import thunk from 'redux-thunk';
import { loadCourses } from './actions';
import Modal from 'react-modal';

const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true
    }) : compose;


const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)))
store.dispatch(loadCourses())

Modal.setAppElement('#root')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
