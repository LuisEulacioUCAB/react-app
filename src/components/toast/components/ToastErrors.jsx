import React from 'react';
import { PropTypes } from 'prop-types';
import styled from '@emotion/styled';

const StyledText = styled('div')({
    fontSize: 16,
    color: '#ff6d4a',
});

const ToastErrors = ( {arr} ) => {
    let values = arr.map((value) => {
        return <li key={value}>{value}</li>;
    });

    return (
        <>
            <StyledText weight="bold">{'Ooops!'}</StyledText>
            <StyledText>
                <ol>
                    {values}
                </ol>
            </StyledText>
        </>
);
};

ToastErrors.propTypes = {
    arr: PropTypes.array.isRequired,
};

export default ToastErrors;