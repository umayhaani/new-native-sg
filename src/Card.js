import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { height, width, totalSize } from 'react-native-dimension';
import Feather from 'react-native-vector-icons/Feather'
import frame from "./assets/Frame.png"
import Ratings from './Ratings';
const Card = (props) => {
return (
        <TouchableOpacity style={styles.preferencesView}>
            <Image
                source={props.img}
                style={styles.imgStyle}
            />
        <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,  alignItems: 'flex-end'}}>
        <Image  source={frame}   style={styles.greenIcon}/>
        </View>

            <Text style={styles.lable}>{props.Lable}</Text>
           <Ratings /> 
           <Text style={styles.lable}>{props.profession}</Text>
           <Text>Desrired Rate <Text style={{...styles.lable,fontSize:totalSize(1.75)}}>$4000/WK</Text></Text>
          <View style={{flexDirection:"row",marginTop:height(2)}}>
           <Feather   name="briefcase" size={totalSize(2)}  style={{marginTop:height(0.5)}}/>
           <Text style={styles.experienceLabel}>{props.experience}</Text>
           </View>
           <Text style={{fontSize:totalSize(1.5),marginTop:height(1)}}>Last active 2 months ago</Text>
        </TouchableOpacity>
    )
    }
const styles = StyleSheet.create({
    preferencesView: {
        width: width(44),
        //marginLeft: width(3),
        //marginTop: height(1.3),
        alignItems: "center",
        height: height(51),
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        fontFamily: "SFProText",
        marginHorizontal:width(0.79),
        marginVertical:width(1.5),

       // marginBottom:width(1)
       
    },
    imgStyle: {
        borderWidth: 1,
        borderColor: "#e4e4e4",
        width: width(30),
        height: width(30),
        marginTop: height(3),
        borderRadius: width(30) / 2,
    },
    // imgStyle: {
    //    borderWidth:1,
    //     borderColor:"#e4e4e4",
    //     width: width(25),
    //     height: height(18),
    //     marginTop: height(3),
    //     borderRadius:width(25),
      

    // },
  
    lable: {
        color: "#1E1E1E",
        fontSize: totalSize(2.3),
   //     fontFamily: "SFProText",
        marginVertical: height(1),
        fontWeight:"bold",
        textAlign:"center"
    },
     
    greenIcon:{
        height:width(9),
        width:width(9),
        marginTop:height(15),
        marginRight:width(5)
    },
    experienceLabel:{
      //  fontFamily: "SFProText",
        color:"#3e3e3e",
        marginLeft:width(2)
    }
});

export default Card;