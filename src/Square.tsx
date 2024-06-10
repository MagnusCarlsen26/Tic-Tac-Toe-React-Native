import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const Square = ({value,setBoard,setTurn,row,column,turn}) => {

	const handleMove = () => {
		if (value == '') {
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
			className="p-2 w-24 h-24 border-2 border-white flex justify-center items-center" onStartShouldSetResponder={handleMove}
		>
			{
				value == 'X' ? <View style={styles.neonX} className='relative w-8 h-8'>
				<View style={styles.neonLine} className='absolute '/>
				<View style={[styles.neonLine, styles.reverseLine]} />
			</View> : ''
			}
			{
				value == 'O' ?  <View style={styles.ring} className='justify-center items-center w-8 h-8 border-2 rounded-full border-blue-400' /> : ''
			}
        </View>
  )
}
const styles = StyleSheet.create({
	neonLine: {
	  position: 'absolute',
	  backgroundColor: '#ff0000',
	  width: 5,
	  height: '100%',
	  top: 0,
	  left: '50%', // Center horizontally
	  transform: [
		{ translateX: -2.5 }, // Adjust for line thickness
		{ rotate: '45deg' },
	  ],
	  shadowColor: '#ff0000',
	  shadowOffset: { width: 0, height: 0 },
	  shadowOpacity: 1,
	  shadowRadius: 10,
	},
	reverseLine: {
	  transform: [
		{ translateX: -2.5 }, 
		{ rotate: '-45deg' },
	  ],
	},
});
  

export default Square