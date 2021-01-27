
import React from 'react'
import styled from 'styled-components/native'

const StyledView = styled.View`
    background-color: coral;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const StyledHeader = styled.Text`
    color: #fff;
    font-size: 20px;
    font-weight: bold;


`

const Header = () => {
    return (
        <StyledView>
            <StyledHeader>TicTacToe</StyledHeader>
        </StyledView>
    )
}

export default Header
