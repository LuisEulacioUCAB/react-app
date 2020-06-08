import {userConstants} from "../shared/users.constants";
import {loginFormValidator, registerFormValidator} from "../shared/validators";
import {history} from "../shared/history";

export const userActions = {
    register,
    authentication,
    logout
};

function register(user) {
    return dispatch  => {

        let errors = false;
        try{
            registerFormValidator(user)
        }catch (e) {
            dispatch(error(e));
            errors = true;
        }

        if(!errors){
            let userList = JSON.parse(localStorage.getItem('userList'));
            if(!userList){
                userList =[];
            }
            userList.push(user);
            localStorage.setItem('userList',JSON.stringify(userList));
            dispatch(success(user));
        }
    };

    function success(user){return {type:userConstants.REGISTER_SUCCESS, user}}
    function error(error){return {type:userConstants.REGISTER_ERROR, error}}
}


function authentication(user) {
    return dispatch => {
        let errors = false;

        try{
            loginFormValidator(user)
        }catch (e) {
            dispatch(error(e));
            errors = true;
        }

        if(!errors){
            localStorage.setItem('user',JSON.stringify(user));
            dispatch(success(user));
        }
    };

    function success(user){return {type:userConstants.LOGIN_SUCCESS, user}}
    function error(error){return{type:userConstants.LOGIN_ERROR, error}}
}

function logout() {
    return dispatch => {
        localStorage.removeItem('user');
        history.push('/login/')
        dispatch(success())

    };
    function success() {return {type:userConstants.LOGOUT}}
}