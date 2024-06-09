import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const Square = ({value,setBoard,setTurn,row,column,turn}) => {

	const handleMove = () => {
		if (value == 0) {
			console.log(row,column,value,turn)
			setBoard( prev => {
				const newBoard = [...prev]
				if (turn == 0) {newBoard[row][column] = 'X'}
				else {newBoard[row][column] = 'O'}
				return newBoard
			})

			setTurn(prev => 1 - prev)
		}
	}
    return (
        <View 
			className="p-2 border-2 border-white" 
			onStartShouldSetResponder={handleMove}
		>
            <Text className="text-white">{value}</Text>
        </View>
  )
}

export default Square