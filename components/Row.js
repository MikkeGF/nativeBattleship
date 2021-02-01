import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
// Import components
import Box from './Box'

const StyledView = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Row = ({ rows, checkAnswer, chooseItemColor, board }) => {

    return (
        <StyledView>
            {
                rows.map((number, index) => (
                    <Box
                        key={index}
                        number={number}
                        checkAnswer={checkAnswer}
                        chooseItemColor={chooseItemColor}
                        board={board} />
                ))
            }
        </StyledView>
    )
}

export default Row
