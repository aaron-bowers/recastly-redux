import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';
import YOUTUBE_API_KEY from './config/youtube.js';

//TODO: Import the Provider component from 'react-redux' here!
// import { Provider } from 'react-redux';
// import configureStore from './store.js';
//TODO: Use the Provider component to make your store available to
//  the rest of your app.
// const store = configureStore(); // You can also pass in an initialState here

ReactDOM.render(
  // <Provider store={store}>
  <App
    API_KEY={YOUTUBE_API_KEY}
    searchYouTube={searchYouTube}
  />
  // </Provider>
  ,
  document.getElementById('app')
);
