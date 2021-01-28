
import React from 'react'
import styled from 'styled-components/native'

const StyledView = styled.View`
    background-color: coral;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
`;

const StyledHeader = styled.Text`
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    margin: 10px;

`

const Header = () => {
    return (
        <StyledView>
            <StyledHeader>Battleship</StyledHeader>
        </StyledView>
    )
}

export default Header
