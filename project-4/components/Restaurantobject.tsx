import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { IRestaurant } from '../../backend/models/Restaurant';

type Props = {
    restaurant: IRestaurant
  }

export const Restaurantobject: React.FC<Props> = ({ restaurant }) => {

    const restaurantnames: string[] = [
        "American", "Asian", "Classic cuisine", "Contemporary", 
        "Creative", "European contemporary", "Indian", "Italian", "Japanese",
        "Korean", "Market cuisine", "Modern cuisine", "Vegetarian"
      ]

    let img: ImageSourcePropType = require('../images/Default.jpg');

    // let image_path: string = '';  
  
    // try {  
    //     image_path = require('../../images/'+restaurant.cuisine+'.jpg'); 
    //     } 
    // catch(err){  
    //     image_path = require('../../images/Default.jpg');  //set default image path
    // }
  

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
    }
})
