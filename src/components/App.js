import React, { Component } from 'react';
import Publishing from './publishing';
import Dashboard from './dashboard';
import Header from './header';
import { Router, Route, Link } from 'react-router'


class App extends Component {

    render() {
        return(
        	<div style={{alignItems: 'center'}}> 
        		<Header/>
        		<h1 style={{marginTop: 30, marginBottom: 10}}>CointelMOB Dev Hub</h1>
        		<div style={{display: 'flex', flexDirection: 'column'}}>
	        		<Link to="/articlepage" style={{textDecoration: 'none', marginTop: 5}}>Article Page</Link>
	        		<Link to="/publishing" style={{textDecoration: 'none', marginTop: 5}}>Publishing</Link>
	        		<Link to="/about" style={{textDecoration: 'none', marginTop: 5}}>About</Link>
        		</div>
        	</div>
        );
    }

}
export default App;
