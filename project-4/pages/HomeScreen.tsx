import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Divider } from "react-native-elements";
import Searchbar from '../components/Searchbar';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../store/rootReducer';
import {IRestaurant} from '../../backend/models/Restaurant';
import { sortingType } from '../store/ducks/sortingDuck';
import thunk from 'redux-thunk';
import Restaurants from '../components/Restaurants';
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



