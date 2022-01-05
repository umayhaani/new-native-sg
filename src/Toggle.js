import React, { useState } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";
import { height, totalSize, width } from "react-native-dimension";
import SwitchToggle from "react-native-switch-toggle";

const Toggle = ({text}) => {
   const [on,off] = useState(true)
    return (
 <View style={styles.mainContainer}>
    <Text style={styles.textStyle}>{text}</Text>
   <SwitchToggle  
     switchOn={on}
     onPress={() => off(!on)}
     duration = {50}
   circleColorOn='#ffffff'
  backgroundColorOn='#118936'
  containerStyle={{
   width: width(17),
   height: height(5.6),
   borderRadius: 25,
   padding: totalSize(0.5),
   shadowColor: "rgba(0, 0, 0, 0.07)",
   shadowOffset: {
      width: 0,
      height: 5,
   },
   shadowOpacity: 0.34,
   shadowRadius: 6.27,
   elevation: 5,
   
 }}
  circleStyle={{
    width: width(6.5),
   height: height(4.5),
   borderRadius: 25
  }}
  />
 </View>
  );
}


const styles = StyleSheet.create({
 mainContainer:{
    marginVertical:height(3),
    flexDirection:"row",
    justifyContent:"space-between",
    width:width(90),
    marginHorizontal:width(5),
    
 },
 textStyle:{
    color:"#3e3e3e",
    fontSize:totalSize(2.5),
    fontFamily: "SFProText",
 }
});

export default Toggle;