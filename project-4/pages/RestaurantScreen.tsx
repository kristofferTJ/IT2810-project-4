import React, {useState} from 'react';
import { StyleSheet, View, Text, Image, Linking, ImageSourcePropType  } from 'react-native';
import { Divider, Icon } from 'react-native-elements';
import { IRestaurant } from '../../backend/models/Restaurant';
import { MaterialCommunityIcons, FontAwesome, Foundation } from '@expo/vector-icons';
import {useRoute} from "@react-navigation/native";
//import { Image } from 'react-native-elements';

interface IParams {
  name: string;
}

export default function RestaurantScreen() {

  const restaurant = useRoute().params as IRestaurant

  let image_path: ImageSourcePropType = require('../images/Default.jpg');
  
      if(restaurant.cuisine == 'American'){
          image_path = require('../images/American.jpg');
        }
      else if(restaurant.cuisine == 'Asian'){
          image_path = require('../images/Asian.jpg');
        }
      else if(restaurant.cuisine === 'Classic cuisine'){
        image_path = require('../images/Classic_cuisine.jpg');
      }
      else if(restaurant.cuisine === 'Contemporary'){
        image_path = require('../images/Contemporary.jpg');
      }
      else if(restaurant.cuisine === 'Creative'){
        image_path = require('../images/Creative.jpg');
      }
      else if(restaurant.cuisine === 'European contemporary'){
        image_path = require('../images/European_contemporary.jpg');
      }
      else if(restaurant.cuisine === 'Indian'){
        image_path = require('../images/Indian.jpg');
      }
      else if(restaurant.cuisine === 'Italian'){
        image_path = require('../images/Italian.jpg');
      }
      else if(restaurant.cuisine === 'Japanese'){
        image_path = require('../images/Japanese.jpg');
      }
      else if(restaurant.cuisine === 'Korean'){
        image_path = require('../images/Korean.jpg');
      }
      else if(restaurant.cuisine === 'Market cuisine'){
        image_path = require('../images/Market_cuisine.jpg');
      }
      else if(restaurant.cuisine == 'Modern cuisine'){
        image_path = require('../images/Modern_cuisine.jpg');
      }
      else if(restaurant.cuisine === 'Vegetarian'){
        image_path = require('../images/Vegetarian.jpg');
      }

    return (
      <View>
        <Image source={image_path} 
        style={{ width: 500, height: 200 }}
        />
        <View style={styles.container}>
          <Text
          style={styles.restaurantname}>
            {restaurant.name}</Text>
            <Icon
            style={styles.staricon}
            size={24}
            name='star' />
            {restaurant.stars>= 2 && <Icon
            style={styles.staricon}
            size={24}
            name='star' />}
            {restaurant.stars>= 3 && <Icon
            style={styles.staricon}
            size={24}
            name='star' />}
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
              Location: 
            </Text>
            <Text style={styles.infotext}>{restaurant.city}, {restaurant.region}</Text>
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
            <Text style={styles.infotext}>{restaurant.cuisine}</Text>
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
            <Text style={styles.infotext}>{restaurant.price}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.website}
            onPress={() => Linking.openURL(restaurant.url)}>
              Visit website
            </Text>
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
    },
    website: {
      fontSize: 17,
      margin: 15,
      textAlign: 'center',
      paddingLeft: 7,
      textDecorationLine: 'underline',
    }
  });

  