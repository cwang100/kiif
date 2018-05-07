import React, { Component } from 'react';
import { Player } from 'video-react';
import '../../css/Video.css';

class Video extends Component {  
	render() {
    return (
	    <Player
	      playsInline
	      poster="images/5.png"
	      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
	    />
    );
  }
}

export default Video;
