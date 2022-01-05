import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { width, height, totalSize } from 'react-native-dimension';
const SeacrhBar = (props) => {
    const [search, setSearch] = useState('');
    return (
     
        <View style={styles.seacrhView} >
            <MaterialIcons style={styles.seacrhIcon} name="search" size={totalSize(3.8)} color="#7E7E7E" />
            <TextInput
                style={styles.input}
                onChangeText={search => setSearch(search)}
                value={search}
                placeholderTextColor="#7E7E7E"
                placeholder={props.placeholder}
            />
          
        </View>

           
    );
};
const styles = StyleSheet.create({
    seacrhView: {
        borderWidth: 1,
        flexDirection: 'row',
        width: '100%',
        marginTop: height(3),
        marginBottom: height(2),
        borderColor: '#ccc',
        borderRadius: 4,
        alignItems: 'center',
        height:height(7)
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
   
});
export default SeacrhBar;
