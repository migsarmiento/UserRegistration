import React from 'react';
import ReactDOM from 'react-dom';
import {Component1} from './component1';
import {Component2} from './component2';

let RegistrationPanel =  React.createClass({
	
	getInitialState: function() {
		return {
			firstName : "",
			lastName : "",
			age : "",
			displayText : false
		}
	},
	
	render: function() {
		
		return <div>
			<Component1 
			firstNameCallback={this.firstNameCallback} 
			lastNameCallback={this.lastNameCallback}
			ageCallback={this.ageCallback}
			updateStateCallback={this.updateStateCallback}/>
			
			<Component2 
			displayText = {this.state.displayText}
			firstName = {this.state.firstName}
			lastName = {this.state.lastName}
			age = {this.state.age} />
		</div>;
	},
	
	firstNameCallback: function(data) {
		this.state.firstName = data;
	},
	
	lastNameCallback: function(data) {
		this.state.lastName = data;
	},
	
	ageCallback: function(data) {
		this.state.age = data;
	},
	
	updateStateCallback: function() {
		console.log(this.state.firstName);
		this.setState({
			firstName : this.state.firstName,
			lastName : this.state.lastName,
			age : this.state.age,
			displayText : !this.state.displayText
		});
	}
});

export{RegistrationPanel};