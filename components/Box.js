import React from 'react'
import styled from 'styled-components/native'
import Entypo from '@expo/vector-icons/Entypo'
import { Pressable } from 'react-native'

const StyledPressable = styled(Pressable)`
    width: 50px;
    height: 50px;
    margin: 10px;
    background-color: lightblue;
    justify-content:center;
    align-items: center;

`;

const Box = ({number, checkAnswer, chooseItemColor, board}) => {


    return (

        <StyledPressable
            key={number}
            onPress={() => {
                checkAnswer(number)

            } }>
            <Entypo
                key={number}
                name={board[number]}
                size={32}
                color={chooseItemColor(number)} />
        </StyledPressable>
    )
}

export default Box
