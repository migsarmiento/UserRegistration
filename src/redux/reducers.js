import * as actionConstants from './actions';

let initialState = {
	userInfo: {},
};

export function appReducers(state = initialState, action) {
	if(!action) {
		return state;
	}
	
	switch(action.type) {
		case actionConstants.CREATE_USER: {
            console.log("SUBMIT PERSONAL INFORMATION REDUCER");
            return {
                state,
                personalInfoPanel: {
                    isCompleted: true,
                    firstName: action.firstName,
                    lastName: action.lastName,
                    dateOfBirth: action.dateOfBirth,
                }
            }
        }
		default: return state;
	}
	
}