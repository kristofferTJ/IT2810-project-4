import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { IRestaurant } from '../../backend/models/Restaurant';
import { stateType } from '../App';
import { fetchRestaurants } from '../store/ducks/restaurantDuck';
import { Restaurantobject } from './Restaurantobject';


function Restaurants() {

    const dispatch = useDispatch();
  
    // Gets all the states from redux that is needed to fetch the correct restaurants
    const regionFilter = useSelector((state: stateType)  => state.regionFilter)
    const cuisineFilter = useSelector((state: stateType)  => state.cuisineFilter)
    const priceFilter = useSelector((state: stateType)  => state.priceFilter)
    const search = useSelector((state: stateType)  => state.search)
    const sortBy = useSelector((state: stateType)  => state.sorting)
    const skip = useSelector((state: stateType) => state.skip)
    const restaurants = useSelector((state: stateType) => state.restaurant)
  
    useEffect(() => {
      dispatch(
          fetchRestaurants(skip, regionFilter, cuisineFilter, priceFilter, search, sortBy.sortBy, sortBy.ascending)
      );
    }, [fetchRestaurants, regionFilter, cuisineFilter, priceFilter, search, sortBy, skip])

    

    return (
       <View>
            {restaurants.map((restaurant: IRestaurant) => 
            <Restaurantobject
                restaurant={restaurant}
            ></Restaurantobject>
            )}
       </View>
    )
}

export default Restaurants;
