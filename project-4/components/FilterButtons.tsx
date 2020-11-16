import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Modal, StyleSheet, TouchableHighlight, Text, FlatList } from 'react-native'
import { Divider, ListItem } from 'react-native-elements';
// import CollapsibleList from "react-native-collapsible-list";
import { updateRegionFilter } from '../store/ducks/regionFilterDuck';
import CheckBox from 'react-native-check-box';
import RegionFiltersComponent from './Filters/RegionFiltersComponent';
import CuisineFiltersComponent from './Filters/CuisineFiltersComponent';
import PriceFiltersComponent from './Filters/PriceFiltersComponent';



function FilterButtons() {

    const [modalVisible, setModalVisible] = useState(false);
    const [filterVisible, setFilterVisible] = useState(0);



    return(

    <View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* Buttons for the different filters */}
            <View style={styles.filterButtons}>
              <TouchableHighlight
                style={styles.filters}
                onPress={() => {
                setFilterVisible(0);
                }}> 
                <Text style={styles.textStyle}>Region</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.filters}
                onPress={() => {
                setFilterVisible(1);
                }}> 
                <Text style={styles.textStyle}>Cuisine</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.filters}
                onPress={() => {
                setFilterVisible(2);
                }}> 
                <Text style={styles.textStyle}>Price</Text>
              </TouchableHighlight>
              </View>
              {filterVisible===0 ? <RegionFiltersComponent></RegionFiltersComponent> :<Text> </Text>}
              {filterVisible===1 ? <CuisineFiltersComponent></CuisineFiltersComponent> :<Text> </Text>}
              {filterVisible===2 ? <PriceFiltersComponent></PriceFiltersComponent> :<Text> </Text>}

            <TouchableHighlight
              style={styles.closeButton}
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
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      shadowColor: "#000",
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    openButton: {
      backgroundColor: "#00bcd4",
      padding: 10,
      elevation: 2,
      width: 80,
      borderRadius: 10,
      height: 40,
      marginTop: 10
    },
    closeButton: {
      backgroundColor: "#00bcd4",
      padding: 10,
      elevation: 2,
      width: 100,
      borderRadius: 10,
      height: 35,
      marginTop: 10
    },
    filters: {
      backgroundColor: "#00bcd4",
      margin: 5,
      elevation: 2,
      width: 80,
      height: 40,
      paddingTop: 10
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },

    filterButtons: {
      flexDirection: "row",
    }
  });
  


export default FilterButtons;


