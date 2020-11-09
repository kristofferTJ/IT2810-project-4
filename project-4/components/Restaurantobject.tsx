import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import { IRestaurant } from '../../backend/models/Restaurant';
import Icon from 'react-native-vector-icons/FontAwesome';


type Props = {
    restaurant: IRestaurant
    navigation: any
  }

export const Restaurantobject: React.FC<Props> = ({ restaurant, navigation }) => {

    const restaurantnames: string[] = [
        "American", "Asian", "Classic cuisine", "Contemporary", 
        "Creative", "European contemporary", "Indian", "Italian", "Japanese",
        "Korean", "Market cuisine", "Modern cuisine", "Vegetarian"
      ]

    let img: ImageSourcePropType = require('../images/Default.jpg');

    const id = restaurant._id
    const name = restaurant.name

    return(
     <Card>
         <Card.Title>{restaurant.name}</Card.Title>
         <Card.Divider/>
         <View style={styles.container} >
         <Image source={img} style={{width:170, height:100}}></Image>
         <View>
         <Text style={styles.text}>{restaurant.region}</Text>
         <Text style={styles.text}>{restaurant.cuisine}</Text>
         <Text style={styles.text}>{restaurant.price}</Text>
         </View>
         </View>
         <Button 
          style={styles.button}
          onPress={() => 
            navigation.navigate('Restaurant', {
              id
            })} 
            title={"More information"}
            icon={
              <Icon
                name="chevron-right"
                size={14}
                style={{padding: 5, paddingTop: 8}}
                color="black"
              />}
            iconRight
            type="outline"
            titleStyle={ {fontSize: 15}} />
    </Card>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row"
      },
    text: {
        paddingLeft: 30,
        paddingTop: 15
    },
    button: {
      marginTop: 10,
    }
})
