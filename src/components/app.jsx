import React from 'react';
import ReactDOM from 'react-dom';	
import {connect} from 'react-redux';
import {RegistrationPanel} from './registration-panel';

let App = React.createClass({

	render: function() {
		return <div> 
			<RegistrationPanel />
		</div>
	}
	
});

export {App};

export default connect(state => {appState:state})(App);