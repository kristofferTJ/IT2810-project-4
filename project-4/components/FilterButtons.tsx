import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Modal, StyleSheet, TouchableHighlight, Text, FlatList } from 'react-native'
import { Divider, ListItem, Button } from 'react-native-elements';
// import CollapsibleList from "react-native-collapsible-list";
import { stateType } from '../pages/HomeScreen';
import { updateRegionFilter } from '../store/ducks/regionFilterDuck';
import CheckBox from 'react-native-check-box';
import RegionFiltersComponent from './Filters/RegionFiltersComponent';
import CuisineFiltersComponent from './Filters/CuisineFiltersComponent';
import PriceFiltersComponent from './Filters/PriceFiltersComponent';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



function FilterButtons() {

    const [modalVisible, setModalVisible] = useState(false);
    const [regionVisible, setRegionVisible] = useState(true);
    const [priceVisible, setPriceVisible] = useState(false);
    const [cuisineVisible, setCuisineVisible] = useState(false);
    const [filterVisible, setFilterVisible] = useState(0);



    return(

    <View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* Buttons for the different filters */}
            <View style={styles.filterButtons}>
              <Button
                buttonStyle={styles.filters}
                onPress={() => {
                setFilterVisible(0);
                }}
                title={"Region"}
                titleStyle={styles.textStyle}
                >
              </Button>
              <Button
                buttonStyle={styles.filters}
                onPress={() => {
                setFilterVisible(1);
                }}
                title={"Cuisine"}
                titleStyle={styles.textStyle}
                > 
              </Button>
              <Button
                buttonStyle={styles.filters}
                onPress={() => {
                setFilterVisible(2);
                }}
                title={"Price"}
                titleStyle={styles.textStyle}
                > 
              </Button>
              </View>
              {filterVisible===0 ? <RegionFiltersComponent></RegionFiltersComponent> :<Text> </Text>}
              {filterVisible===1 ? <CuisineFiltersComponent></CuisineFiltersComponent> :<Text> </Text>}
              {filterVisible===2 ? <PriceFiltersComponent></PriceFiltersComponent> :<Text> </Text>}
            <Button
              type="outline"
              //style={styles.closeButton}
              buttonStyle={styles.closeButton}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
              titleStyle={ {fontSize: 15, color: "#424242"}}
              title={"Hide filters "}
              icon={
               <AntDesign name="close" size={18} color="#424242" />
              }
              iconRight
            >
              <Text style={styles.textStyle}>Hide filters</Text>
            </Button> 
          </View>
        </View>
      </Modal>

      <Button
        buttonStyle={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
        icon={
          <MaterialCommunityIcons name="filter-variant" size={25} color="white" />
        }
      > 
      
        <Text style={styles.textStyle}>Filter</Text>
      </Button>
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
      width: 60,
      borderRadius: 10,
      height: 42,
      marginTop: 10
    },
    closeButton: {
      borderColor: "#424242", 
      width: 150,
      elevation: 2,
      borderRadius: 5,
      marginTop: 14
    },
    filters: {
      backgroundColor: "#00bcd4",
      margin: 5,
      elevation: 2,
      width: 80,
      height: 40,
      paddingTop: 10,
      borderRadius: 10
    },
    textStyle: {
      color: "white",
      fontSize: 15,
      fontWeight: "bold",
      textAlign: "center"
    },
    filterButtons: {
      flexDirection: "row",
      justifyContent: "center",
    }
  });
  


export default FilterButtons;


