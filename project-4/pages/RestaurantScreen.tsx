import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import Header from '../components/Header';
import { Divider, Icon } from 'react-native-elements';
import { IRestaurant } from '../../backend/models/Restaurant';
import { MaterialCommunityIcons, FontAwesome, Foundation } from '@expo/vector-icons';
import {useRoute} from "@react-navigation/native";
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { saveComment } from '../store/ducks/commentDuck';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { stateType } from './HomeScreen';
import { fetchRestaurants } from '../store/ducks/restaurantDuck';
import Comments from '../components/Comments';
import axios from 'axios';
import rootReducer from '../store/rootReducer';
//import { Image } from 'react-native-elements';

export default function RestaurantScreen() {

  const dispatch = useDispatch();
  const [restaurant, setRestaurant] = useState<IRestaurant[]>();


  //Gets the restaurant with the correct name
  useEffect(() => {
      const getRestaurant = async() => {
        const api_URL = (`http://it2810-41.idi.ntnu.no:3000/api/restaurant/filter/?skip=0&name=${restaurantName}`);
        await axios.get(api_URL).then(response => {setRestaurant(response.data)})
      }
      getRestaurant();
  }, [])

   const restaurantName = useRoute().params
  
    // Gets all the states from redux that is needed to fetch the correct restaurants
    const regionFilter = useSelector((state: stateType)  => state.regionFilter)
    const cuisineFilter = useSelector((state: stateType)  => state.cuisineFilter)
    const priceFilter = useSelector((state: stateType)  => state.priceFilter)
    const search = useSelector((state: stateType)  => state.search)
    const sortBy = useSelector((state: stateType)  => state.sorting)
    const skip = useSelector((state: stateType) => state.skip)
  
    useEffect(() => {
      dispatch(
          fetchRestaurants(skip, regionFilter, cuisineFilter, priceFilter, search, sortBy.sortBy, sortBy.ascending)
      );
    }, [fetchRestaurants, regionFilter, cuisineFilter, priceFilter, search, sortBy, skip])



    return (
      <View>
      <ScrollView>
        {restaurant?.map((restaurant: IRestaurant) => (

        <View key={restaurant._id}>
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
        <Comments
          restaurantName={restaurant.name}
        ></Comments>
        </View>
        ))}
</ScrollView>
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

  