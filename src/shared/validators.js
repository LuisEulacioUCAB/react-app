import {ValidationError} from "./errors";

export const registerFormValidator = (registerData) =>{
    const {
        username,
        email,
        password,
        confirm_password
    } = registerData;
    let errorMessages = [];
    let userList = JSON.parse(localStorage.getItem('userList'));
    const user = userList.find((user)=> user.username === username);
    const _email = userList.find((user)=> user.email === email);

    if(!username){
        errorMessages.push("Username can't empty");
    }


    if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
        errorMessages.push("Invalid Email");
    }


    if(!email){
        errorMessages.push("Email can't empty");
    }

    if(!password){
        errorMessages.push("Password can't empty");
    }

    if(user && username){
        errorMessages.push("User already exists");
    }

    if(_email && email){
        errorMessages.push("Email already exists");
    }

    if(password !== confirm_password){
        errorMessages.push("The passwords don't match");
    }
    if (errorMessages.length !== 0) throw new ValidationError(errorMessages);
};


export const loginFormValidator = (loginData) => {
    const {
        username,
        password
    } = loginData;

    let errorMessages = [];
    let userList = JSON.parse(localStorage.getItem('userList'));
    const user = userList.find((user)=> user.username === username);

    if(!username){
        errorMessages.push("Email can't empty");
    }

    if(!password){
        errorMessages.push("Password can't empty");
    }

    if(!user && username) errorMessages.push("User does not exists");

    if(user){
        if(password !== user.password) errorMessages.push('Incorrect password');
    }

    if (errorMessages.length !== 0) throw new ValidationError(errorMessages);
};