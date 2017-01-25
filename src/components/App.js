import React, { Component } from 'react';
import Publishing from './publishing';
import Dashboard from './dashboard';
import Header from './header';
import VideoBackground from './videobackground';
import { Router, Route, Link } from 'react-router'


class App extends Component {

    render() {
        return(
        	<div style={{alignItems: 'center'}}> 
        		<Header/>
       
                <VideoBackground/>

        		<div style={{display: 'flex', flexDirection: 'column'}}>
                    <Link to="/about" style={{textDecoration: 'none', marginTop: 5}}>About</Link> 
	        		<Link to="/publishing" style={{textDecoration: 'none', marginTop: 5}}>Publishing Form</Link>
        		</div>
        	</div>
        );
    }

}
export default App;
