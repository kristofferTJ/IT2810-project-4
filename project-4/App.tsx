import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './store/rootReducer';
import { fetchRestaurants } from './store/ducks/restaurantDuck';
import {IRestaurant} from '../backend/models/Restaurant';
import { sortingType } from './store/ducks/sortingDuck';
import thunk from 'redux-thunk';
import Restaurants from './components/Restaurants';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
//import HomeScreen from './pages/HomeScreen';
//import 'react-native-gesture-handler';
//const Stack = createStackNavigator();
import RestaurantScreen from './pages/RestaurantScreen';
import FilterButtons from './components/FilterButtons';




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

export default function App() {

  const middlewares = [thunk];

  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  

    return (
    <Provider store={store}>
    <View>
    <Header/>
    <ScrollView>
    <View style={styles.search}>
    <Searchbar/>
    <FilterButtons></FilterButtons>
    </View>
    <Restaurants></Restaurants>
    </ScrollView>
    </View>
    </Provider>

    /*
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen 
        name="Restaurant" 
        component={RestaurantScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    */
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: 'lightgrey',
  },

  text: {color: 'blue', 
  fontSize:30},

  search: {
    flexDirection: "row"
  }
});

