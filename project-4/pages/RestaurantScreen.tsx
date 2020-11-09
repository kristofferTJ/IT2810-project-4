import React, {useState} from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Header from '../components/Header';
import { Divider, Icon } from 'react-native-elements';
import { IRestaurant } from '../../backend/models/Restaurant';
import { MaterialCommunityIcons, FontAwesome, Foundation } from '@expo/vector-icons';
//import { Image } from 'react-native-elements';

interface IParams {
  name: string;
}

export default function RestaurantScreen({navigation, route}: any) {

  const [restaurant, setRestaurant] = useState<IRestaurant[]>();

  const { id } = route.params;

  //setRestaurant med å hente ut restaurant med denne id

  console.log(id)

    return (
      <View>
        <Image source={require('../images/Default.jpg')} 
        style={{ width: 500, height: 200 }}
        />
        <View style={styles.container}>
          <Text
          style={styles.restaurantname}>
            Credo</Text>
            <Icon
            style={styles.staricon}
            size={24}
            name='star' />
        </View>
        <Divider/>
        <View>
          <Text
          style={styles.about}>
            About
          </Text>
          <View style={styles.container}>
            <Icon
              style={styles.infoicon}
              size={22}
              name='room' />
            <Text style={styles.infotext}>
              Region: 
            </Text>
            <Text style={styles.infotext}>Norway</Text>
          </View>
          <View style={styles.container}>
          <MaterialCommunityIcons 
            style={styles.infoicon}
            name="food-fork-drink" 
            size={22} 
            color="black" />
            <Text style={styles.infotext}>
              Cuisne: 
            </Text>
            <Text style={styles.infotext}>Modern</Text>
          </View>
          <View style={styles.container}>
            <FontAwesome 
              style={styles.infoicon}
              name="dollar" 
              size={20} 
              color="black"/>
            <Text style={styles.infotext}>
              Price: 
            </Text>
            <Text style={styles.infotext}>$$$</Text>
          </View>
        </View>
        <Divider/>
        <Text style={styles.infotext}>Comments:</Text>
      </View>
    );
  }


  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
    staricon: {
      paddingTop: 18,
      padding: 7, 
    },
    infoicon: {
      paddingTop: 8,
      paddingLeft: 18, 
    },
    restaurantname: {
      color: '#263238', 
      fontSize: 30,
      margin: 10,
    },
    about: {
      fontSize: 17,
      fontWeight: "bold",
      margin: 20,
    },
    infotext: {
      fontSize: 17,
      margin: 10,
    }
  });