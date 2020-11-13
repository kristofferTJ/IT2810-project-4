import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { updateSkip } from './../store/ducks/skipDuck';
import { useDispatch, useSelector } from 'react-redux';
import { stateType } from '../pages/HomeScreen';


export default function Pagination() {

    const dispatch = useDispatch();

    let skip = useSelector((state: stateType) => state.skip)
    let counter = useSelector((state: stateType) => state.counter)

    console.log(skip)
    console.log(counter)

  return (
    <View style={{alignItems: 'center'}}>
    <View style={styles.container}>
        <Button onPress={() => skip>0 ? dispatch(updateSkip(skip - 20)) : skip=0} disabled={skip===0 ? true : false} type="clear" icon={<AntDesign name="leftcircleo" size={35} color={skip===0 ? "gray" : "#424242"} />}/>
        <Button onPress={() => true ? dispatch(updateSkip(skip + 20)) : skip===skip } type="clear" icon={<AntDesign name="rightcircleo" size={35} color="#424242" />}/>     
    </View>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        margin: 20,
        width: 250,
    }
  });
