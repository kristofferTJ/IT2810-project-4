import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Icon, Button } from 'react-native-elements'
import { StyleSheet, TextInput, View } from 'react-native';

export default function Searchbar() {
  return (
    <View>
    <View style={styles.searchfield}>
      <TextInput
        placeholder='Search'
        style={styles.formField}
        placeholderTextColor={'#888888'}
      > 
      </TextInput>
      <Icon
      style={styles.searchicon}
      size={22}
      name='search' />
    </View>
    <Button
        icon={
        <Icon
            name="filter_list"
            size={15}
            color="white"
        />
        }
        title="Button with icon component"
    />
  </View>
  );
}

const styles = StyleSheet.create({
    searchfield: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: "space-between",
        margin: 5,
        borderWidth: 1,
        padding: 12,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 20,
        borderColor: '#888888',
        height: 50
    },
    searchicon:{
         padding: 3, 
    },
    formField: {
        width: 300,
        fontSize: 18,
    }
});