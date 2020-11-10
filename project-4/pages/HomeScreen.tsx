import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from '../components/Header';
import Searchbar from '../components/Searchbar';
import Navigationbutton from '../components/Navigationbutton';


export default function HomeScreen() {
  return (
    <View>
        <Header/>
        <ScrollView>
            <Searchbar/>
            <View style={styles.container}>
                <Navigationbutton/>
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
