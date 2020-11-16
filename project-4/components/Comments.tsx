import React, { useEffect, useState } from 'react';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
 import axios from 'axios';
import { IRestaurant } from '../../backend/models/Restaurant';
import { saveComment } from '../store/ducks/commentDuck';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { Divider } from 'react-native-elements';
// import rootReducer from '../store/rootReducer';

 interface Props {
     restaurantName: string;
  }

function Comments({restaurantName}: Props) {

    const dispatch = useDispatch();
    const [restaurant, setRestaurant] = useState<IRestaurant[]>();
    let [kommentar, setKommentar] = useState<string[]>([]);

    let comment: string = "";
    
     //Gets the restaurant with the correct name
     useEffect(() => {
         const getRestaurant = async() => {
           const api_URL = (`http://it2810-41.idi.ntnu.no:3000/api/restaurant/filter/?skip=0&name=${restaurantName}`);
           await axios.get(api_URL).then(response => {setRestaurant(response.data)})
         }
         getRestaurant();
     }, [])


  

     function newComment() {
        restaurant?.map((restaurant: IRestaurant) => (dispatch(saveComment({comment, restaurant}))))
        allComments.push(comment)
     }

     let allComments: string[] = []
     
     function add() {
        restaurant?.map((restaurant: IRestaurant) => (restaurant.comments.map((c: string) => (allComments.push(c)))))
     }
     add()

     return (
         <View>
             {/* {allComments.map((comment: string) => (
                <View style={styles.container}>
                <Text style={styles.text}>{comment}</Text>
                <Divider></Divider>
                </View>
             ))} */}

<FlatList
        data={allComments}
        keyExtractor={(comment) => comment}
        numColumns={1}
        renderItem={({item}) => (
            <View style={styles.container}>
            <Text style={styles.text}>{item}</Text>
            <Divider></Divider>
            </View>
        )}
      
      ></FlatList>
            {/* {comments.map((c: string) => (
                <View style={styles.container}>
                <Text style={styles.text}>{c}</Text>
                <Divider></Divider>
                </View>  
            ))} */}
            {restaurant?.map((restaurant: IRestaurant) => (
                <View key={restaurant._id} style={styles.container}>
                <View style={styles.inputField}>
            <TextInput
            placeholder='Comment'
         placeholderTextColor={'#888888'}
        onChangeText={(text: string) => comment=text}
      > 
      </TextInput>
      </View>
      <View style={styles.button}>
      <Button 
         onPress={newComment}
          title="Submit"
          color="black"
          accessibilityLabel="Learn more about this purple button"
        />  
        </View>
        </View>
        ))}
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
      marginTop: 30,
      marginBottom: 40,
      backgroundColor: "lightgrey",
      width: 130,
      alignSelf: "center",
      borderRadius: 10
    },
    container: {
        marginTop: 15,
      },
    text: {
        fontSize: 17,
        marginLeft: 20
    },
    inputField: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        height: 50
    }
})


export default Comments;
