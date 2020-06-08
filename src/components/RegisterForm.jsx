import React from "react";
import PropTypes from 'prop-types';
import {InputComponent} from "./InputComponent";

const RegisterForm = (props) => {
    const {data, onChange} = props;
    const {
        username,
        email,
        password,
        confirm_password
    } = data;

    return(
        <>
            <InputComponent
                onChange={onChange}
                placeholder={'Username'}
                name={'username'}
                value={username}
                aria-describedby={'username'}
                type={'text'}
            />
            <InputComponent
                onChange={onChange}
                placeholder={'Email'}
                name={'email'}
                value={email}
                aria-describedby={'email'}
                type={'email'}
            />
            <InputComponent
                onChange={onChange}
                placeholder={'Password'}
                name={'password'}
                value={password}
                aria-describedby={'password'}
                type={'password'}
            />
            <InputComponent
                onChange={onChange}
                placeholder={'Confirm password'}
                name={'confirm_password'}
                value={confirm_password}
                aria-describedby={'confirm_password'}
                type={'password'}
            />
        </>
    );

};



RegisterForm.propTypes = {
    data: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
};

export {RegisterForm}