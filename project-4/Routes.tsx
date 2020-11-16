import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RestaurantScreen from './pages/RestaurantScreen';
import HomeScreen from './pages/HomeScreen';


interface RoutesProps {

}

export const Routes: React.FC<RoutesProps> = ({}) => {

    const Stack = createStackNavigator();

    return(
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Michelindatabase',
            headerTintColor: "#ffffff",
            headerStyle: {
            backgroundColor: '#4dd0e1',
            borderBottomColor: '#4dd0e1',
            borderBottomWidth: 3,
            height: 105,
            },
            headerTitleStyle: {
                fontSize: 28,
              },
              cardStyle: { backgroundColor: 'white' },
            }}    
          />
          <Stack.Screen 
          name="Restaurant" 
          component={RestaurantScreen}
          options={{ title: 'Michelindatabase',
          headerTintColor: "#ffffff",
          fontSize: 50,
          headerStyle: {
          backgroundColor: '#4dd0e1',
          borderBottomColor: '#4dd0e1',
          borderBottomWidth: 3,
          height: 100,
          },
          headerTitleStyle: {
            fontSize: 28,
          },
          cardStyle: { backgroundColor: 'white' },
          }}  />
        </Stack.Navigator>
      </NavigationContainer>

    );
}