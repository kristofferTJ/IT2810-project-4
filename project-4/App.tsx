import React from 'react';
import { StyleSheet, View} from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
//import HomeScreen from './pages/HomeScreen';
import RestaurantScreen from './pages/RestaurantScreen';
//import 'react-native-gesture-handler';

//const Stack = createStackNavigator();

export default function App() {
  return (
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
   <View>
     <RestaurantScreen/>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: 'lightgrey',
  },
  text: {color: 'blue', 
  fontSize:30}
});
