import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'

import Box from './Box'
const StyledView = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;




const Row = (props) => {
    const {rows, checkAnswer, chooseItemColor, board } = props
    return (
        <StyledView>
            {
                rows.map((key) => (
                    <Box key={key} number={key} checkAnswer={checkAnswer} chooseItemColor={chooseItemColor} board={board} />
                ))
            }
        </StyledView>
    )
}

export default Row
