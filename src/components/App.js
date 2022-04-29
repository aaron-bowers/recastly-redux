// import { connect } from 'react-redux';
import React from 'react';
import VideoListContainer from './VideoList.js';
import VideoPlayerContainer from './VideoPlayer.js';
import SearchContainer from './Search.js';

var App = () => (
  // this.getYouTubeVideos('react tutorials');

  <div>
    <nav className="navbar">
      <div className="col-md-6 col-md-offset-3">
        <SearchContainer />
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <VideoPlayerContainer />
      </div>
      <div className="col-md-5">
        <VideoListContainer />
      </div>
    </div>
  </div>
);

export default App;
