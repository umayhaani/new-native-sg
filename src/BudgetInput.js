import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Text
} from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation'
import { width, height, totalSize } from 'react-native-dimension';
const BudgetInput = ({budgetMinHandler,budgetMaxHandler,min,max}) => {
 
    return (
     <View style={styles.mainContainer}>
        <View style={styles.seacrhView} >
            <Foundation style={styles.seacrhIcon} name="dollar" size={totalSize(3.8)} color="#7E7E7E" />
            <TextInput
                style={styles.input}
                onChangeText={search => budgetMinHandler(search)}
                value={min}
                placeholderTextColor="#7E7E7E"
                placeholder="50"
            />
        
        </View>
        <Text style={styles.textStyle}>-</Text>
            <View style={styles.seacrhView} >
            <Foundation style={styles.seacrhIcon} name="dollar" size={totalSize(3.8)} color="#7E7E7E" />
            <TextInput
                style={styles.input}
                onChangeText={search => budgetMaxHandler(search)}
                value={max}
                placeholderTextColor="#7E7E7E"
                placeholder="60"
            />
          
        </View>

        </View>
    );
};
const styles = StyleSheet.create({
    mainContainer:{
        width: '100%',
        flexDirection: 'row',
        marginTop:-width(3)

    },
    seacrhView: {
        borderWidth: 1,
        flexDirection: 'row',
        width: '42%',
        marginTop: height(3),
        marginBottom: height(2),
        borderColor: '#ccc',
        borderRadius: 4,
        alignItems: 'center',
        height:height(9),
       marginHorizontal:width(3)
    },
    seacrhIcon: {
        paddingLeft: width(5)
    },
    input: {
        borderColor: "black",
        height: height(6),
        fontFamily: "SFProText",
        paddingVertical: 0,
        fontSize:totalSize(3.1),
        width: width(80),
        padding: width(3),
    },
    textStyle:{
        fontFamily: "SFProText",
        alignSelf:"center",
        fontSize:totalSize(5),
        color:"#7e7e7e"
    }
   
});
export default BudgetInput;
