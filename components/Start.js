import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React, { useState, useEffect } from 'react'
import { Button, View } from 'react-native';

export default function Start({ start, startGame, startTimer, resetGame }) {

    const handleClick = () => {
        if (!start) {
            startTimer()
            startGame(true)
        }
        else {
            resetGame()
        }
    }

    return (
        <View>
            <Button title={start ? 'New game' : 'Start'} onPress={handleClick}></Button>
        </View>
    )
}
