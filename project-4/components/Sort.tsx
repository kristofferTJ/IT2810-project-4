import React, { useState } from 'react';
import {View, Modal, StyleSheet, FlatList} from 'react-native';
//import CheckBox from 'react-native-check-box';
import {Button, CheckBox} from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { setSorting } from '../store/ducks/sortingDuck';

function Sort() {

    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);
    const [activeFilter, setActiveFilter] = useState(1)

    function updateSortingbutton(value: string){
        let ascending: boolean;
        value === "name" ? ascending=true : ascending=false;
        dispatch(setSorting(value, ascending))
    }

    //Modal for sorting alternatives, with checkboxes that updates what to sort on    

    return (
        <View>
            <Modal animationType="slide" transparent={true} visible={modalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <CheckBox
                            center
                            containerStyle={{backgroundColor: "white", borderColor: "white"}}
                            title='Name'
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            onPress={() => {
                                setActiveFilter(1),
                                updateSortingbutton("name")
                              }}
                            checked={activeFilter===1 ? true : false}
                            />
                             <CheckBox
                            center
                            containerStyle={{backgroundColor: "white", borderColor: "white"}}
                            title='Price'
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            onPress={() => {
                                setActiveFilter(2),
                                updateSortingbutton("price")
                              }}
                            checked={activeFilter===2 ? true : false}
                            />
                             <CheckBox
                            center
                            containerStyle={{backgroundColor: "white", borderColor: "white"}}
                            title='Stars'
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            onPress={() => {
                                setActiveFilter(3),
                                updateSortingbutton("stars")
                              }}
                            checked={activeFilter===3 ? true : false}
                            />
                    <Button
                    buttonStyle={{}}
                    onPress={() => {
                        setModalVisible(!modalVisible);
                    }}
                    title="Hide sort"
                    type="clear"
                    />   
                    </View>
                </View>
            </Modal>

            <Button
            buttonStyle={{}}
            onPress={() => {
                setModalVisible(true);
              }}
            title="Sort"
            type="clear"
            />   
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
      elevation: 5,
    }
})


export default Sort
