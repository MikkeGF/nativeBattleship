import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components/native'
import { Platform } from 'react-native'
// import components
import Row from './Row';
import Start from './Start';

const StyledView = styled.View`
    flex: 8;
    justify-content: center;
    align-items: center;
`;
const ResultView = styled.View`
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const StyledText = styled.Text`
    font-size: 16px;
    margin: 5px;
`;

const TextView = styled.View`
    margin: 10px;
    flex-direction: row;
    justify-content: space-between;

`;


export default function Battleship() {
    const START = 'plus'
    const CROSS = 'cross'
    const CIRCLE = 'circle'


    const [isMark, setMark] = useState(true);
    const [start, startGame] = useState(false)
    const [seconds, setSeconds] = useState(30)
    const [ships, setShips] = useState({});
    const [shipcount, setShipCount] = useState(3)
    const [hit, setHit] = useState(0)

    const [winner, setWinner] = useState('');
    const [board, setBoard] = useState([]);
    const [numbers, setNumbers] = useState([])
    const timerRef = useRef();

    // possible to select difficulty of game. No UI yet.
    const [size, setSize] = useState(5)
    const [clickcount, setClickCount] = useState(15)

    const makeBoard = () => {
        let gameboard = [];
        gameboard = Array(size * size).fill(START)
        setBoard(gameboard)

        const nums = new Set();
        while (nums.size !== 3) {
            nums.add(Math.floor(Math.random() * (size * size - 1)));
        }
        setShips(nums)
    }




    useEffect(() => {
        makeBoard()
        boardSize(size)
    }, [])

    useEffect(() => {
        if (seconds === 0 || shipcount === 0 || clickcount === 0) {
            stopTimer();
            setWinner(gameResult())
        }
    });



    const startTimer = () => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
        }, 1000);
        timerRef.current = interval
    }

    const stopTimer = () => {
        clearInterval(timerRef.current)
    }


    const checkAnswer = number => {
        if (!start) {
            alert('Start game first')
        }
        else if (shipcount > 0 && clickcount > 0) {
            setClickCount(clickcount - 1)

            if (ships.has(number)) {
                board[number] = CIRCLE
                setMark(!isMark)
                setShipCount(shipcount - 1)
                setHit(hit + 1)
            }
            else {
                board[number] = CROSS
                setMark(!isMark)

            }
        }
        else {
            setWinner(gameResult())
        }
    }

    const resetGame = () => {
        stopTimer()
        makeBoard()
        setMark(true)
        startGame(false)
        setSeconds(30)
        setShipCount(3)
        setHit(0)
        setClickCount(15)
        setWinner('')
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

        if (seconds === 0) {
            return 'Time is up! Ships remaining'
        }
        if (shipcount === 0) {
            return 'You sinked all ships!'
        }
        if (clickcount === 0) {
            return 'Out of bombs. Ships remaining'
        }

    }

    const boardSize = (size) => {
        let ArrayOfNumbers = Array.from(Array(size * size).keys())
        let newArray = [];
        let i = 0;
        for (i; i < size; i++) {
            newArray.push(ArrayOfNumbers.splice(0, size))
        }
        setNumbers(newArray)
    }





    return (
        <StyledView>
            {
                numbers.map((rows) => (
                    <Row
                        rows={rows}
                        checkAnswer={checkAnswer}
                        chooseItemColor={chooseItemColor}
                        board={board}
                    />
                ))
            }
            <ResultView>
                {start && winner === '' ?
                    <StyledText>
                        The game is on...
                </StyledText>
                    :
                    winner !== ''
                        ? <StyledText> {winner}</StyledText>
                        : <StyledText> Game is not started</StyledText>
                }
                <TextView>
                    <StyledText>
                        Ships left {shipcount}
                    </StyledText>
                    <StyledText>
                        Hits {hit}
                    </StyledText>
                    <StyledText>
                        Turns left {clickcount}
                    </StyledText>
                </TextView>
                <StyledText>
                    Time left: {seconds}
                </StyledText>
                <Start
                    start={start}
                    startGame={startGame}
                    startTimer={startTimer}
                    resetGame={resetGame} />
            </ResultView>
        </StyledView>
    );
}
