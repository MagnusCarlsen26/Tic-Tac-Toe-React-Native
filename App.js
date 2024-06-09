import { StatusBar } from 'expo-status-bar';
import React, { useState }from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Square from './src/Square'

export default function App() {

	const [board,setBoard] = useState([
		[0,0,0] ,
		[0,0,0] ,
		[0,0,0]
	])
	const [turn,setTurn] = useState(0)
	return (
		<SafeAreaView className="bg-black w-full h-full flex justify-center items-center">
			<Text className='text-white m-2'>Player {1 + turn}'s turn </Text>
			{
				board.map( (value,row) => 
					<View className="flex-row ">
						{
							value.map( (indivalue,column) => 
								<Square 
									value={indivalue}
									key={column}
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
		</SafeAreaView>
	);
}
