import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { updateSearch } from '../store/ducks/searchDuck';
import { MaterialIcons } from '@expo/vector-icons';

export default function Searchbar() {

  const dispatch = useDispatch()

    // Updates the search state 
    function changeText(text: string) {
      dispatch(updateSearch(text))
  }

  return (
    <View>
     <View style={styles.searchfield}>
      <TextInput
        placeholder='Search'
        style={styles.formField}
        placeholderTextColor={'#888888'}
        onChangeText={(text: string) => changeText(text)}
      > 
      </TextInput>
      <MaterialIcons 
      name="search" 
      size={22} 
      style={styles.searchicon}
       />
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
    searchfield: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: "space-between",
        margin: 5,
        marginLeft: 10,
        borderWidth: 1,
        padding: 12,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 20,
        borderColor: '#888888',
        height: 50,
    },
    searchicon:{
         padding: 3, 
         color: "#616161",
    },
    formField: {
        width: "70%",
        fontSize: 18,
    }
});