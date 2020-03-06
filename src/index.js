import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
// import { createStore, applyMiddleware } from 'redux'
// import { Provider } from 'react-redux'
// import thunk from 'redux-thunk'
// import reducer from './store/reducers'
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
});


// const store = createStore(reducer, applyMiddleware(thunk))
    // {/* <Provider store={store}>
    //     <App />
    // </Provider> */}
ReactDOM.render(<Router>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
