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
	
	componentWillReceiveProps(nextProps) {
		console.log(nextProps.displayText);
		this.setState({
			firstName : nextProps.firstName,
			lastName : nextProps.lastName,
			age	:	nextProps.age,
			displayText : nextProps.displayText
		});
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

export{Component2};