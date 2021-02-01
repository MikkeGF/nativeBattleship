
import React from 'react'
import { Button, View } from 'react-native';

export default function Start({ setWinner, start, startGame, startTimer, resetGame }) {

    const handleClick = () => {
        if (!start) {
            startTimer()
            startGame(true)
            setWinner('')
        }
        else {
            resetGame()
        }
    }
    return (
        <View>
            <Button title={start ? 'New game' : 'Start'} onPress={handleClick} />
        </View>
    )
}
