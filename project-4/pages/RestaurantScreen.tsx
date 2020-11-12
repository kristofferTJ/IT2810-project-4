import React, {useState} from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import Header from '../components/Header';
import { Divider, Icon } from 'react-native-elements';
import { IRestaurant } from '../../backend/models/Restaurant';
import { MaterialCommunityIcons, FontAwesome, Foundation } from '@expo/vector-icons';
import {useRoute} from "@react-navigation/native";
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { saveComment } from '../store/ducks/commentDuck';
//import { Image } from 'react-native-elements';

interface IParams {
  name: string;
}

export default function RestaurantScreen() {

  let currentComment: string = '';
  const dispatch = useDispatch();
  const restaurant = useRoute().params as IRestaurant

    return (
      <View>
        <Image source={require('../images/Default.jpg')} 
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
              Region: 
            </Text>
            <Text style={styles.infotext}>{restaurant.region}</Text>
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
        </View>
        <Divider/>
        <Text style={styles.about}>Comments:</Text>
        {restaurant.comments.map((comment: string) => (
          <View>
          <Text style={styles.infotext}>{comment}</Text>
          <Divider></Divider>
          </View>
        ))}
      <TextInput
        placeholder='Comment'
        placeholderTextColor={'#888888'}
        onChangeText={(text: string) => currentComment=text}
      > 
      </TextInput>
      <Button
         onPress={() => dispatch(saveComment({currentComment, restaurant}))}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />      
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

  