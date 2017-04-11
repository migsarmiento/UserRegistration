import React from 'react';
import ReactDOM from 'react-dom';

let Component1 = React.createClass({
	
	propTypes: {
		firstNameCallback: React.PropTypes.func,
		lastNameCallback: React.PropTypes.func,
		ageCallback: React.PropTypes.func,
		updateStateCallback: React.PropTypes.func
	},
	
	sendFirstName(event) {
		this.props.firstNameCallback(event.target.value);
	},
	
	sendLastName(event) {
		this.props.lastNameCallback(event.target.value);
	},
	
	sendAge(event) {
		this.props.ageCallback(event.target.value);
	},
	
	updateState(event) {
		event.preventDefault()
		this.props.updateStateCallback();
	},
	
	render: function () {
		return <div>
			<form action="/">
				First Name: <input type="text" name="FirstName" onChange={ (event) => {this.sendFirstName(event)} } /><br/>
				Last Name: <input type="text" name="LastName" onChange={ (event) => {this.sendLastName(event)}} /><br/>
				Age: <input type="text" name="Age" onChange={(event) => {this.sendAge(event)}} /><br/>
				<input type="submit" value="Submit" onClick = {(event) => {this.updateState(event)}} />
			</form>
		</div>;
	}
});

export {Component1};