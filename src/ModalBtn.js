import React, { useState } from "react";
import { View, Pressable, StyleSheet, Text } from "react-native";
import { height, totalSize, width } from "react-native-dimension";
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const ModalBtn = ({toggleVisible}) => {

    return (
        <View style={{display:"flex",flexDirection:"row",marginHorizontal:width(4),justifyContent:"space-between", marginTop:width(6)}}>
        <Pressable
          style={styles.button}
          onPress={() => toggleVisible("Filter")}
        >
                  <Feather name="filter"  size={totalSize(3.5)} 
                   style={styles.iconStyle}
                  /> 
          <Text style={styles.textStyle}>Filter <Text style={{...styles.textStyle,color:"#7e7e7e"}}>(4)</Text></Text>
  
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => toggleVisible("Sort")}
        >
  
           <FontAwesome name="long-arrow-up"  size={totalSize(3)}
                 style={{...styles.iconStyle}}
               />
           
               <FontAwesome name="long-arrow-down"  size={totalSize(3)}
                 style={{...styles.iconStyle,marginLeft:-width(9)}}
               /> 
                <Text style={styles.textStyle}>Sort</Text>
               
      </Pressable>
        </View>
  );
}


const styles = StyleSheet.create({
    button: {
        borderRadius: totalSize(1),
        borderWidth:1,
        borderColor:"#d4d4d4",
        backgroundColor: "#ffffff",
        height:height(9),
        width:width(45),
        flexDirection:"row",
        alignSelf:"center",
        justifyContent:"space-around",
        alignItems:"center",
       // marginTop:width(8) 
      },
      iconStyle:{
        marginLeft:width(5),
        color:"#118936",
        transform: [
      { rotateY: '180deg'},
       ], 
      },
      textStyle: {
        color: "black",
        fontFamily: "SFProText",
        fontSize:totalSize(2.3),
        fontWeight:"normal",
        marginRight: width(8),
      }
});

export default ModalBtn;