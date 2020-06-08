import {FormControl, InputGroup} from "react-bootstrap";
import React from "react";
import { PropTypes } from 'prop-types';
import {faUser, faKey, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const InputComponent = ({name, onChange, placeholder, value, idInput , type }) => {

    let icon;

    if(type ==='email'){
        icon = faEnvelope
    }else if(type === 'text'){
        icon = faUser
    }else if (type === 'password'){
        icon = faKey
    }

    return(
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text id={idInput}>
                    <FontAwesomeIcon icon={icon} color={'#9C2C8F'}/>
                </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
                className={'form-control-custom'}
                onChange={onChange}
                aria-describedby={idInput}
                value={value}
                placeholder={placeholder}
                name={name}
                type={type}
            />
        </InputGroup>
    )
};

InputComponent.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    idInput: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export {InputComponent}