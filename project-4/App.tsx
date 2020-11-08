import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from './components/Header';
import Searchbar from './components/Searchbar';


export default function App() {
  return (
    <View>
    <Header/>
    <ScrollView>
    <Searchbar/>
      <View style={styles.container}>
      </View>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: 'lightgrey',
  },
  text: {color: 'blue', 
  fontSize:30}
});
