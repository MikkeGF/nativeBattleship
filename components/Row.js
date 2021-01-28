import React from 'react'
import styled from 'styled-components/native'

import Box from './Box'
const StyledView = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;




const Row = ({ key1, key2, key3, key4, key5, chooseItemColor, checkAnswer, board }) => {

    return (
        <StyledView>
            <Box number={key1} checkAnswer={checkAnswer} chooseItemColor={chooseItemColor} board={board} />
            <Box number={key2} checkAnswer={checkAnswer} chooseItemColor={chooseItemColor} board={board} />
            <Box number={key3} checkAnswer={checkAnswer} chooseItemColor={chooseItemColor} board={board} />
            <Box number={key4} checkAnswer={checkAnswer} chooseItemColor={chooseItemColor} board={board} />
            <Box number={key5} checkAnswer={checkAnswer} chooseItemColor={chooseItemColor} board={board} />
        </StyledView>
    )
}

export default Row
