import React from 'react';
import ReactDOM from 'react-dom';
import {completeCreateUser} from '../redux/actions';

let Component1 = React.createClass({
	
	getInitialState: function() {
		return {
			firstName : "",
			lastName : "",
			age: "",
			isCompleted : false
		}
	},
	
	updateState(event) {
		event.preventDefault();
		this.props.updateStateCallback();
	},
	
	updateFirstName(event) {
		this.firstName = event.target.value;
	},
	
	updateLastName(event) {
		this.lastName = event.target.value;
	},
	
	updateAge(event) {
		this.age = event.target.value;
	},
	
	render: function () {
		return <div>
			<form action="/">
				First Name: <input type="text" name="FirstName" onChange={ (event) => this.updateFirstName(event)} /><br/>
				Last Name: <input type="text" name="LastName" onChange={ (event) => this.updateLastName(event)} /><br/>
				Age: <input type="text" name="Age" onChange={ (event) => this.updateAge(event)} /><br/>
				<input type="submit" value="Submit" onClick = { completeCreateUser("","","") } />
			</form>
		</div>;
	}
});

export {Component1};