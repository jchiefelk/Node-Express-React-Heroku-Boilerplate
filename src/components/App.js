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
                    <div style={{position: 'absolute',top: 100}}>

			        		<div style={{display: 'flex',alignItems: 'center', justifyContent: 'center'}}>
			 					<p id="Title">Protecting from SQL Injection</p> 
			 				</div>

                            <p className="paragraph">
                                SQL injection is an old and popular attack strategy used by Hackers to get a website that uses SQL to dump the contents of the database.
                                It is still common in 2017, even though as a developer it is rather straightforward to implement measures to protect against.  Many times a successful
                                SQL-injection attack is the consequence of a either a lazy or time-constrained developer.
                            </p>

                            <p className="paragraph">
                                There are multiple strategies a developer can implement to protect against SQL-injection. Below I will discuss
                                using Prepared Statements with Parameterized Queries.
                            </p>

                            <p className="section-title">
                                Prepared Statements With Parameterized Queries 
                            </p>

                            <p className="paragraph">
                                Prepared statements ensure that a hacker is not able to change the intent of the query.  A hacker 
                                may be able to insert SQL commands, but the effect is limited to executing the SQL code set in the prepared statement.
                            </p>

                            <p className="paragraph">
                                To illustrate the use of prepared statements in Node.js, take a look at the JavaScript below.
                            </p>

                            <div style={{alignItems: 'center',justifyContent: 'center',display: 'flex', marginBottom: 50, marginTop: 50}} >
                                <img style={{height: 300}} src="https://s3-us-west-1.amazonaws.com/cointelmob/github/prepared_post_request.png" />
                            </div>


                            <p className="paragraph">
                                The above statement is a function that returns a promise. Take a look at the locally scoped variables sql and Insert. sql is used to predefine the SQL code.  The question marks
                                '?', represent parameter input.  The Insert array contains the parameters that are passed to the SQL code in place of the question marks, when the promsise 'connect' is executed. 
                            </p>


                            <p className="paragraph">
                                This code can be found here on <a style={{cursor: 'pointer'}} href="https://github.com/jchiefelk/Node-Express-React-Heroku-Boilerplate">Github.</a>  
                            </p>
                    </div>
          
        
            </div>
        );
    }
}
export default App;
