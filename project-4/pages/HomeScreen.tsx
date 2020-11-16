import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {Divider, Button} from "react-native-elements";
import Searchbar from '../components/Searchbar';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../store/rootReducer';
import { fetchRestaurants } from '../store/ducks/restaurantDuck';
import {IRestaurant} from '../../backend/models/Restaurant';
import { sortingType } from '../store/ducks/sortingDuck';
import thunk from 'redux-thunk';
import Restaurants from '../components/Restaurants';
import Navigationbutton from '../components/Navigationbutton';
import FilterButtons from '../components/FilterButtons';
import Pagination from '../components/Pagination';
import Sort from '../components/Sort';


// Types for all the redux states 
export type stateType = {
  restaurant: IRestaurant[],
  regionFilter: string[],
  priceFilter: string[],
  cuisineFilter: string[],
  search: string,
  sorting: sortingType,
  skip: number,
  counter: number
}

export default function HomeScreen({navigation, route}: any) {

  const middlewares = [thunk];

  const store = createStore(rootReducer, applyMiddleware(...middlewares));

  return (
    <Provider store={store}>
      <View>
      <ScrollView>
      <View style={styles.search}>
        <Searchbar/>
        <FilterButtons></FilterButtons>
      </View>   
      <Sort/>
      <Divider/>
      <Restaurants navigation={navigation}/>
      <Pagination/>
      </ScrollView>
      </View>
    </Provider>

  );
}

const styles = StyleSheet.create({

  search: {
    flexDirection: "row"
  }
});



