import { PropTypes } from 'prop-types';
import React from "react";
import styled from "@emotion/styled";

const StyledTitle = styled(`div`)`
    font-weight:bold;
    text-align:center;
    margin-bottom:15px;
    font-size:24px;
`;

const Title = ({title}) =>{
    return(
        <StyledTitle>{title}</StyledTitle>
    )
};

Title.propTypes ={
    title: PropTypes.string
};

export {Title}

