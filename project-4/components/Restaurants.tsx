import React from 'react'
import { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { IRestaurant } from '../../backend/models/Restaurant';
import { stateType } from '../pages/HomeScreen';
import { fetchRestaurants } from '../store/ducks/restaurantDuck';
import { Restaurantobject } from './Restaurantobject';
import { updateCounter } from '../store/ducks/counterDuck';


function Restaurants({navigation}: any) {

    const dispatch = useDispatch();
  
    // Gets all the states from redux that is needed to fetch the correct restaurants
    const regionFilter = useSelector((state: stateType)  => state.regionFilter)
    const cuisineFilter = useSelector((state: stateType)  => state.cuisineFilter)
    const priceFilter = useSelector((state: stateType)  => state.priceFilter)
    const search = useSelector((state: stateType)  => state.search)
    const sortBy = useSelector((state: stateType)  => state.sorting)
    const skip = useSelector((state: stateType) => state.skip)
    const restaurants = useSelector((state: stateType) => state.restaurant)

    // Fetches the number of pages needed to show all restaurants matching the requirements
    useEffect(() => {
        dispatch(
            updateCounter(regionFilter, cuisineFilter, priceFilter, search)
        );
    }, [updateCounter, regionFilter, cuisineFilter, priceFilter, search])
 
    // Fetches the restaurants
    useEffect(() => {
      dispatch(
          fetchRestaurants(skip, regionFilter, cuisineFilter, priceFilter, search, sortBy.sortBy, sortBy.ascending)
      );
    }, [fetchRestaurants, regionFilter, cuisineFilter, priceFilter, search, sortBy, skip])

    
    return (
       <View>
            {restaurants.map((restaurant: IRestaurant, index: any) => 
            <Restaurantobject
                restaurant={restaurant}
                key={index}
                navigation={navigation}
            ></Restaurantobject>
            )}
       </View>
    )
}

export default Restaurants;
