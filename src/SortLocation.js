import React, { useCallback, useState,useEffect } from "react";
import { View, StyleSheet,TextInput, Text, Modal,ScrollView} from "react-native";
import { height, totalSize, width } from "react-native-dimension";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import EvilIcons from 'react-native-vector-icons/EvilIcons'; 
import axios from "axios";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

 const SortLocation = (props) => {
    const [location,setLocation] =useState(null)
    const [newLoc,setNewLoc] = useState(null)
    const [search, setSearch] = useState('');
    const [searchTimeOut,setSearchTimeOut] = useState();


  //for requestOptimization
    useEffect(()=>{
      if(!search) return
      clearTimeout(searchTimeOut);
      setSearchTimeOut(setTimeout(()=>getLocations(search),100))
    },[search])


    const locationHandler=async()=>{
      try{
        const locations = await axios.get('http://192.168.18.48:3000/development/guest/searchlocations')
        setNewLoc(locations.data.map(location=>location.LocationWithCountry))
      
      }catch(err){
        console.log("error")
      }
     
    }
    useEffect(()=>{
     locationHandler()
    },[])

    const changeHandler = (text)=>{
          setSearch(text)

    }
const getLocations=async ()=>{
  try{
    const locations = await axios.get(`http://192.168.18.48:3000/development/guest/searchlocations?location=${search}`)
    setNewLoc(locations.data.map(location=>location.LocationWithCountry))
    console.log(locations.data)
   }catch(error){
     console.log("error....")
   }
}

  const finalObj = [];
    if(newLoc){
    for (let j = 0; j < newLoc.length; j++) {
      finalObj[j]={
           label:newLoc[j]
         }
    
      }
    }

      const onPressHandler = (title)=>{
       //console.log(title, "im locstion title")
             setLocation(title)
            // props.getFilterResult()
            props.setLocationPlaceholderHandler(title)
      }


    return (
           <> 
  
      <Modal
        animationType="slide"
        //transparent={true}
        visible={props.modalVisible}
      >
        

        <ScrollView>
        
        <View style={styles.modalView}>
             <View style={styles.headerView}>
           
             <Text style={{...styles.textStyle,fontWeight:"bold"}}>Select Location</Text>
             <EvilIcons name="close" size={totalSize(3.5)}  onPress={()=>props.setShowLocationModal(prevState=>!prevState)} />
           </View>
           <View  style={styles.searchCity}>
                    {/* SEARCH BAR */}
                    <View style={styles.seacrhView} >
            <MaterialIcons style={styles.seacrhIcon} name="search" size={totalSize(3.8)} color="#7E7E7E" />
            <TextInput
                style={styles.input}
                onChangeText={search =>changeHandler(search)}
                value={search}
                placeholderTextColor="#7E7E7E"
                placeholder="Search City/State"
            />
          
        </View>
           </View>
        
          <RadioForm
      animation={true}
  
    >
  {
   finalObj.map((obj, i) => {
   // console.log(obj, i,"====")
      return(

     <View style={styles.mainBorder} key={i}>
      <RadioButton labelHorizontal={true} key={i} >
        <RadioButtonInput
          obj={obj}
          index={i}
           isSelected={obj.label==location}
           onPress={()=>onPressHandler(obj.label)}
          borderWidth={1}
          buttonInnerColor={'green'}
         buttonOuterColor={'#7e7e7e'}
          buttonSize={10}
          buttonOuterSize={18}
          buttonWrapStyle={styles.btnWrap}
        />
        <RadioButtonLabel
          obj={obj}
          index={i}
          labelHorizontal={true}
          onPress={()=>console.log("pressed")}
          labelStyle={styles.labelStyle}
        />
      </RadioButton>
     
      </View>
 
  
      )
})
  }  
 
</RadioForm>
         
               
        </View>
      
        </ScrollView>  
      
        </Modal>
      
           </>
  );
}


const styles = StyleSheet.create({
  mainBorder: {
    borderWidth: 1,
    borderRadius:8,
    flexDirection: 'row',
    marginVertical: height(1.5),
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent:"space-between",
    height:height(9),
    marginHorizontal:width(4),
    shadowColor: "#ccc",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.18,
    shadowRadius: 3.00,
    elevation:0.4
},
headingStyle:{
 color:"#1e1e1e",
 fontFamily: "SFProText",
 marginTop:width(4),
 marginHorizontal:width(3.5),
 fontSize:totalSize(2.5),
 fontWeight:"600",

},
labelStyle:{
   // color:"red",
    fontFamily: "SFProText",
    fontSize:totalSize(2.5),
   //padding:width(2.8),
    textAlign:"center",
    marginVertical:width(4)
},
btnWrap:{
  marginLeft:width(2),
  padding:width(2),
  textAlign:"center",
  marginVertical:width(4),
},
totalStyle:{
  marginHorizontal:width(4),
  fontFamily: "SFProText",
  color:"#5e5e5e",
  fontSize:totalSize(2.5),
  marginVertical:width(2.8)
},
centeredView: {
  flex: 1,
  
},
modalView: {
  height:"100%",
 // backgroundColor: "red",
 // padding: 35,
  // alignItems: "center",

},

headerView:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    alignContent:"center",
    marginVertical:width(4),
    marginHorizontal:width(4),
  //  fontFamily: "SFProText",
},

textStyle:{
  fontSize:totalSize(2.5),
  fontFamily: "SFProText",
  color:"#3e3e3e"
},
buttonOpen: {
  backgroundColor: "red",
},
buttonClose: {
  backgroundColor: "pink",
},

headingStyle:{
color:"#1e1e1e",
fontFamily: "SFProText",
marginTop:width(4),
marginHorizontal:width(3.5),
fontSize:totalSize(2.5),
fontWeight:"600",

},
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

searchCity:{
  marginHorizontal:width(3.5),
  
}
});

export default SortLocation;