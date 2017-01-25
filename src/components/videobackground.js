import React, { Component } from 'react';
import '../css/videobackground.css';

class VideoBackground extends Component {
	
	render() {

			return (
			
					<video id="background-video" loop autoPlay muted playsinline>
					  <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4"/>
					  <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/ogg"/>
					</video>

			);
	}
};

export default VideoBackground;