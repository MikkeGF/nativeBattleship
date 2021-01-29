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

    const { checkAnswer, chooseItemColor, board, key1, key2, key3, key4, key5 } = props;
    const [keys, setKeys] = useState([])
    useEffect(() => {
        keys.push(key1, key2, key3, key4, key5)
        setKeys(keys)
    }, []);

    return (
        <StyledView>
            {
                keys.map((key) => (
                    <Box key={key} number={key} checkAnswer={checkAnswer} chooseItemColor={chooseItemColor} board={board} />
                ))

            }
        </StyledView>
    )
}

export default Row
