import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js'; 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga  from './store/rootSaga/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
	rootReducer, 
	applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);


ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));  
