import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import Row from './Row';

const StyledView = styled.View`
    flex: 6;
    justify-content: center;
    align-items: center;
`;
const StyledText = styled.Text`

`;


export default function Board() {
    const START = 'plus'
    const CROSS = 'cross'
    const CIRCLE = 'circle'


    const [isMark, setMark] = useState(true);
    const [ships, setShips] = useState();
    const [shipcount, setShipCount] = useState(3)
    const [clickcount, setClickCount] = useState(15)
    const [winner, setWinner] = useState('');
    const [board, setBoard] = useState([]);
    console.log(ships)



    useEffect(() => {
        let gameboard = [];
        gameboard = Array(25).fill(START)
        setBoard(gameboard)

        const nums = new Set();
        while (nums.size !== 3) {
            nums.add(Math.floor(Math.random() * 24));
        }
        setShips(nums)

    }, [])


    const checkAnswer = number => {

        if (shipcount > 0 && clickcount > 0) {
            setClickCount(clickcount - 1)

            if (ships.has(number)) {
                board[number] = CIRCLE
                setMark(!isMark)
                setShipCount(shipcount - 1)

            }

            else {
                board[number] = CROSS
                setMark(!isMark)

            }
        }
        


    }

    const resetGame = () => {

    }

    const chooseItemColor = number => {
        if (board[number] === CROSS) {
            return '#FF3031'
        }
        else if (board[number] === CIRCLE) {
            return '#45CE30'
        }
        else {
            return '#74B9FF'
        }
    }

    const gameResult = () => {

        if (shipcount == 0) {
            return 'You Win'
        }
        else if (clickcount == 0) {
            return 'Out of bombs'
        }
        else {
            return ''
        }

    }

    return (
        <StyledView>
            <Row
                key1={0}
                key2={1}
                key3={2}
                key4={3}
                key5={4}
                checkAnswer={checkAnswer}
                chooseItemColor={chooseItemColor}
                board={board}
                />

            <Row
                key1={5}
                key2={6}
                key3={7}
                key4={8}
                key5={9}
                checkAnswer={checkAnswer}
                chooseItemColor={chooseItemColor}
                board={board}
                 />
            <Row
                key1={10}
                key2={11}
                key3={12}
                key4={13}
                key5={14}
                checkAnswer={checkAnswer}
                chooseItemColor={chooseItemColor}
                board={board}
                />
            <Row
                key1={15}
                key2={16}
                key3={17}
                key4={18}
                key5={19}
                checkAnswer={checkAnswer}
                chooseItemColor={chooseItemColor}
                board={board}
                />
            <Row
                key1={20}
                key2={21}
                key3={22}
                key4={23}
                key5={24}
                checkAnswer={checkAnswer}
                chooseItemColor={chooseItemColor}
                board={board}
                />
            <StyledText>
                Ships left {shipcount}

            </StyledText>
            <StyledText>
                turns left {clickcount}
            </StyledText>
        </StyledView>
    );
}
