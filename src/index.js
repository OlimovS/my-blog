import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import gameReducer from './store/reducers/game';
import authReducer from './store/reducers/auth';
import scoreReducer from './store/reducers/score';
import postReducer from './store/reducers/post';

const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;

const rootReducer = combineReducers({
  game: gameReducer,
  auth: authReducer,
  score: scoreReducer,
  post: postReducer
})


const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
      <Provider store={store}>
           <BrowserRouter>
               <App />
           </BrowserRouter>
       </Provider>

);

ReactDOM.render(app , document.getElementById('root'));
registerServiceWorker();
