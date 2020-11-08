import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Header from '../components/Header';
import { Divider, Icon } from 'react-native-elements';
//import { Image } from 'react-native-elements';


export default function RestaurantScreen() {
    return (
      <View>
        <Header/>
        <Image source={require('../images/Default.jpg')} 
        style={{ width: 500, height: 200 }}
        />
        <View style={styles.container}>
          <Text
          style={styles.restaurantname}>
            Credo</Text>
            <Icon
            style={styles.icon}
            size={22}
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
            <Icon
              style={styles.infoicon}
              size={22}
              name='done'
              type='MaterialIcons' />
            <Text style={styles.infotext}>
              Cuisne: 
            </Text>
            <Text style={styles.infotext}>Modern</Text>
          </View>
          <View style={styles.container}>
            <Icon
              style={styles.infoicon}
              size={22}
              name='done' />
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
    icon: {
      paddingTop: 18,
      padding: 7, 
    },
    infoicon: {
      paddingTop: 8,
      paddingLeft: 17, 
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