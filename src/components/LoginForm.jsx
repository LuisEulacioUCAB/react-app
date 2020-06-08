import React from "react";
import PropTypes from 'prop-types';
import {InputComponent} from "./InputComponent";

const LoginForm = (props) => {
    const {data, onChange} = props;
    const {
        username,
        password,
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
                placeholder={'Password'}
                name={'password'}
                value={password}
                aria-describedby={'password'}
                type={'password'}
            />
        </>
    );

};



LoginForm.propTypes = {
    data: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
};

export {LoginForm}