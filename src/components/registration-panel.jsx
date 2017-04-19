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
			<Component1 />
			<Component2 />
		</div>;
	}
});

export {RegistrationPanel};