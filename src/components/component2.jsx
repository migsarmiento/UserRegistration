import React from 'react';
import ReactDOM from 'react-dom';

let Component2 = React.createClass({
	
	getInitialState: function() {
		return {
			firstName : "",
			lastName : "",
			age : "",
			displayText : false
		}
	},
	
	render () {
		if(this.state.displayText) {
			return <div>
				Hi, my name is {this.state.firstName} {this.state.lastName} and I am {this.state.age} years old. 
			</div>
		} else {
			return <div></div>
		}
	}
});

export {Component2};