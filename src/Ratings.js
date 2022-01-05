import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { height, width, totalSize } from 'react-native-dimension';
import { Rating, AirbnbRating } from 'react-native-ratings';

const Ratings = (props) => {
return (
       <View style={{flexDirection:"row",alignItems:"center", justifyContent:"center",marginHorizontal:width(2)}}>
         <AirbnbRating defaultRating={5} size={12} selectedColor="#ffba08" count={5} showRating={false} isDisabled={false} /> 
         <Text style={{color:"#ffba08"}}>4.8 </Text>  
         <Text>(493)</Text>
       </View>
    )
    }

export default Ratings;




















