import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Michelindatabase</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    padding: 15,
    backgroundColor: '#4dd0e1',
  },
  text: {
    paddingTop: 40,
    color: 'white', 
    fontSize: 28
  }
});

