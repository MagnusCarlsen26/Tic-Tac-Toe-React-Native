import { StatusBar } from 'expo-status-bar';
import React, { useState }from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Square from './src/Square'

export default function App() {

	const [board,setBoard] = useState([
		['','',''] ,
		['','',''] ,
		['','','']
	])
	const [turn,setTurn] = useState(0)

	const isWin = () => {
		console.log('HIIi')
		let ans = ''
		const currentPlayer = !turn % 2 === 0 ? 'X' : 'O';
			for (let i = 0; i < 3; i++) {
			if (board[i][0] === currentPlayer && board[i][1] === currentPlayer && board[i][2] === currentPlayer) {
				ans = true
			}
		}
	
		for (let i = 0; i < 3; i++) {
			if (board[0][i] === currentPlayer && board[1][i] === currentPlayer && board[2][i] === currentPlayer) {
				ans = true
			}
		}
	
		if (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) {
			ans = true
		}
		if (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer) {
			ans = true
		}
		if (ans) {
			console.log(ans)
			return true
		} 
		ans = false
		console.log(ans)
		return false; 
	};
	

	return (
		<SafeAreaView className="bg-black w-full h-full flex justify-center items-center">
			<Text className='text-white m-2 text-2xl'>Player {1 + turn}'s turn </Text>
			{
				board.map( (value,row) => 
					<View className="flex-row ">
						{
							value.map( (indivalue,column) => 
								<Square 
									value={indivalue}
									key={`${row}${column}`}
									setTurn={setTurn}
									row = {row}
									column = {column}
									setBoard = {setBoard}
									turn = {turn}
									value = {board[row][column]}
								/>
							)}
					</View>
				)
			}
			{
				isWin() ? <Text className='text-white'>'Game Ended'</Text> : <Text className='text-white'>'Ongoing'</Text>
			}
		</SafeAreaView>
	);
}
