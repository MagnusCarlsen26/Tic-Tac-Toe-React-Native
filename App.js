import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView className="bg-black w-full h-full">
      <Text className="text-white">HELLO WORLD</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
