import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';
import rootReducer from './store/reducers';
import defaultState from './store/state';
import { getValueFromLocalStorage, setValueFromLocalStorage } from './utils';
import './index.css';

const loadState = () => getValueFromLocalStorage('state');

const saveState = state => setValueFromLocalStorage('state', state);

const initialState = loadState() || defaultState;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveState({ saved: store.getState().saved });
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.querySelector('#root')
);
