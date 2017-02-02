import React, { Component } from 'react';
import Publishing from './publishing';
import Dashboard from './dashboard';
import Header from './header';
import VideoBackground from './videobackground';
import { Router, Route, Link } from 'react-router'
import TimerMixin from 'react-timer-mixin';
import '../css/main.css';

class App extends Component {

    constructor() {
                super();
                this.aboutMe1 = "Click on 'Form' located in the header to go to the Sample Form";
                this.state = {
                    aboutMe1: '', 
                    iterator: 0, 
                    start1: false
                };
    }
    componentDidMount(){
         TimerMixin.setTimeout(
          () => { 
                this.setState({
                    aboutMe1: this.aboutMe1.charAt(0),
                    iterator: this.state.iterator+=1,
                    start1: true
                })
             },
          60
         );
    }
    componentDidUpdate(){
        if(this.state.start1===true) {
             TimerMixin.setTimeout(
              () => { 
                    this.setState({
                        aboutMe1: this.state.aboutMe1+this.aboutMe1.charAt(this.state.iterator),
                        iterator: this.state.iterator+=1
                    });
               },
              60
             );
        } 
        if(this.state.iterator==( this.aboutMe1.length) && this.state.start1==true ) {
            this.setState({ 
                start1: false, 
                iterator: this.state.iterator+=1
            });
        }
    }
    render() {
        return(
        	<div style={{alignItems: 'center'}}> 
        		<Header/>
                <div style={{alignItems: 'center',justifyContent: 'center',display: 'flex',flexDirection: 'column'}}>
                    <div style={{position: 'absolute',top: 50, margin: 50}}>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                        <p id="Title">#NoDAPL</p> 
                        <p id="About-Me">{this.state.aboutMe1}</p>
                        </div>
                    </div>
                </div>
                <VideoBackground/>
        	</div>
        );
    }
}
export default App;
