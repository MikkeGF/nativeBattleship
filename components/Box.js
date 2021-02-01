import React from 'react'
import styled from 'styled-components/native'
import Entypo from '@expo/vector-icons/Entypo'
import { Pressable, Platform } from 'react-native'

const StyledPressable = styled(Pressable)`
    width: ${Platform.OS === 'ios' ? 60 : 40};
    height: ${Platform.OS === 'ios' ? 60 : 40};
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
