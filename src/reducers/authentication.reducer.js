import {userConstants} from "../shared/users.constants";

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
    switch (action.type) {

        case userConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case userConstants.LOGIN_ERROR:
            return {
                error: action.error
            };
        case userConstants.LOGOUT:
            return {
                loggedIn: false,
            };
        default:
            return state
    }
}