import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { width, height, totalSize } from 'react-native-dimension';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const FilterBtn = (props) => {
    return (
        <TouchableOpacity onPress={props.handler} style={styles(props).btnFb}>
            {props.iconName && (
                <>
                    {props.iconName === "facebook" || props.iconName === "google" ?
                        <FontAwesome5 style={styles(props).icon} name={props.iconName} size={totalSize(3.2)} color={props.iconColor} />
                        :
                        <FontAwesome style={styles(props).icon} name={props.iconName} size={totalSize(3.2)} color={props.iconColor} />
                    }
                </>
            )
            }
            <Text style={styles(props).btnText} >
                {props.btnText}
            </Text>
        </TouchableOpacity>
    );
};
const styles = (props) => StyleSheet.create({
    btnFb: {
       marginVertical:width(3.5),
       marginHorizontal:width(4),
        flexDirection: 'row',
        width: '90%',
        height: height(7.5),
        borderRadius: 4,
        backgroundColor: props.backgroundColor,
        alignItems: "center",
        justifyContent: "center",
        borderColor: props.borderColor,
        borderWidth: 1,
      
    },
    icon: {
        paddingLeft: width(9)
    },
    btnText: {
        color: props.color,
        fontSize: totalSize(2.5),
        textAlign: 'center',
        width: width(70),
        fontFamily: "SFProText",
        fontWeight:"bold"
    },
});
export default FilterBtn;