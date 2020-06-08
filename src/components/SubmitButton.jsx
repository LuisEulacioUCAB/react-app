import { PropTypes } from 'prop-types';
import React from "react";
import styled from "@emotion/styled";
import {Button, Spinner} from "react-bootstrap";

const StyledButton = styled(Button)`
    color:white!important;
    font-weight:bold;
    border-radius:0;
    margin-top:25px;
    background-color: ${props => props.bgColor ? props.bgColor : 'black' };
    
    &:hover{
        background-color:${props => props.bgColor ? props.bgColor : 'black' };
    }
    
    &:focus{
        background-color:${props => props.bgColor ? props.bgColor : 'black' };
    }
    
`;

const StyledSpinner = styled(Spinner)`
    color:white;
`;

const SubmitButton = ({onClick, text, bgColor, isSubmitted}) =>{
    return(
        <StyledButton variant="secondary" size="lg" block onClick={onClick} bgColor={bgColor}>
            {!isSubmitted?(text):(<StyledSpinner animation="grow"/>)}
        </StyledButton>
    )
};

SubmitButton.propTypes ={
    onClick: PropTypes.func.isRequired,
    bgColor: PropTypes.string.isRequired
};

export {SubmitButton}