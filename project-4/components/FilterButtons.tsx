import React, { useState } from 'react'
import { View, Modal, StyleSheet, TouchableHighlight, Text } from 'react-native'
import { CheckBox, Divider, ListItem } from 'react-native-elements';
import CollapsibleList from "react-native-collapsible-list";


function FilterButtons() {

    const [modalVisible, setModalVisible] = useState(false);
    const [check, setCheck] = useState(false);

    let italian: boolean = false;

    function cuisineUpdate(cuisine: string) {
        

    }

    return(

    <View>
         <Modal animationType="slide" transparent={true} visible={modalVisible}>
            <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <CollapsibleList
            numberOfVisibleItems={1}
             buttonContent={
              <Text style={styles.header}>Cuisine</Text>
            }>
              <Text style={styles.header}>Cuisine</Text>
              <View style={styles.container}>
              <Text style={styles.modalText}>Italian</Text>
              <CheckBox checked={italian} onPress={() => cuisineUpdate("Italian")}></CheckBox>
              </View>
              <View style={styles.container}>
              <Text style={styles.modalText}>Asian</Text>
              <CheckBox checked={false}></CheckBox>
              </View>
              <View style={styles.container}>
              <Text style={styles.modalText}>American</Text>
              <CheckBox checked={check}></CheckBox>
              </View>
            </CollapsibleList>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide filter</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      > 
        <Text style={styles.textStyle}>Filter</Text>
      </TouchableHighlight>
    </View>

    )
}


const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    openButton: {
      backgroundColor: "#00bcd4",
      padding: 10,
      elevation: 2,
      width: 80,
      borderRadius: 10
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
      paddingTop: 17
    },
    header: {
        fontSize: 18,
    },
    container: {
        flexDirection: "row",
    }
  });
  


export default FilterButtons;


