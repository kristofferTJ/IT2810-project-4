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
import RestaurantScreen from './pages/RestaurantScreen';
import HomeScreen from './pages/HomeScreen';
import { Routes } from './Routes';





export default function App() {

    return (
    <Routes/>
    )
}



