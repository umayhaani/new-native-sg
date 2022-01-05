import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Text,
    Button
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import logo from "./assets/logo.png"
import { width, height, totalSize } from 'react-native-dimension'
const Header = (props) => {
    return (
<View style={styles.navbar}>
{/* logo */} 
<Ionicons name="menu" size={46} color="white" style={{alignSelf:"center", marginHorizontal:width(3), width:width(8)}}  />
<Image
    source={logo}
    style={{ 
        alignSelf:"center",
        alignItems:"center",   
        marginLeft:width(7),
        resizeMode : "stretch",
        marginVertical:height(1.2),
        width: width(32), 
        height: height(7),
        backgroundColor:"#0f1e2b",
         }}
/>
<TouchableOpacity  style={styles.joinButton}>
                        <Text style={{    fontSize:height(3),  textAlign: 'center', color: '#fff', fontWeight:"700",   marginVertical:height(1.4)}}>
                         Join
                         </Text>
                    </TouchableOpacity>

</View>
          
          );
        };

const styles = StyleSheet.create({
    navbar: {
        backgroundColor:"#0f1e2b",
        color:"white",
        width: width(100),
        height: height(10), 
        flexDirection:'row', 
        justifyContent:"space-between"
    },
    joinButton: { 
        //     borderRadius:hp(0.5), 
           
            backgroundColor:"#0f1e2b",
            color:"white",
            width:width(15),
            height:height(6.5),
            marginVertical:height(1.5),
            fontFamily: "SFProText",
        
           },
});
export default Header;