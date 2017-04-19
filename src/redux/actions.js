export const CREATE_USER = 'CREATE_USER';

export function completeCreateUser(firstName, lastName, dateOfBirth) {
	return dispatch(type: CREATE_USER,
					firstName: firstName,
					lastName: lastName,
					dateOfBirth: dateOfBirth
	)
}
