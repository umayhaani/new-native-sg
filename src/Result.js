import React from 'react';
import {
    Text,
    StyleSheet,
 View,
 ScrollView
  } from 'react-native';
import { height, totalSize, width } from 'react-native-dimension';
const suggestions = ["RN Nurse","Nursing","Nurse Assistant", "Nurse Administrator","RICU Nurse"];

  const Result = ()=>{
    return (
        <>
       <Text style={styles.textView}>Showing 16495 results for <Text  style={{fontWeight:"bold"}}>"Nurse"</Text></Text>
       <ScrollView contentContainerStyle={styles.horizontalView} horizontal={true}  >
           {suggestions.map((s,index)=><Text key={index} style={styles.textStyle}>{s}</Text>)}
       </ScrollView>
    
       </>
     );

  }

  const styles = StyleSheet.create({
        textView:{
            color:"#3e3e3e",
            fontFamily: "SFProText",
            marginVertical:height(3),
            fontSize:totalSize(2.8),
            alignSelf:"flex-start"
        },
        horizontalView:{
            alignItems:"flex-start",
            justifyContent:"flex-start"
      
        },
        
            textStyle:{
               borderColor:"#d4d4d4",
               borderWidth:1,
               color:"#9e9e9e",
               padding:totalSize(1),
               marginRight:width(3),
               marginBottom:height(3),
               fontFamily: "SFProText",
               fontSize:totalSize(2.5)
            }
        
  });
  export default Result;
