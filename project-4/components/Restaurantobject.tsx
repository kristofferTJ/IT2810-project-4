import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

const users = [
    {
       name: 'brynn',
       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    }, // more users here
   ];

export default function Restaurantobject() {
  return (
    <Card>
        <Card.Title>CARD WITH DIVIDER</Card.Title>
        <Card.Divider/>
        {
            users.map((u, i) => {
            return (
                <View key={i} style={styles.user}>
                <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{ uri: u.avatar }}
                />
                <Text style={styles.name}>{u.name}</Text>
                </View>
            );
            })
        }
    </Card>
  );
}


// const styles = StyleSheet.create({
//   header: {
//     height: 100,
//     padding: 15,
//     backgroundColor: '#4dd0e1',
//   },
//   text: {
//     paddingTop: 40,
//     color: 'white', 
//     fontSize: 28
//   }
// });