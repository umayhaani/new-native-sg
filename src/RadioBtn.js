import React, { useCallback, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { height, totalSize, width } from "react-native-dimension";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { useEffect } from "react/cjs/react.development";
 

 const RadioBtn = (props) => {
   const [skillListingType,setSkillListingType] = useState("")
   console.log(props.clearAll,"tgthtr")
   useEffect(()=>{
    if(props.clearAll){
      setSkillListingType(" ")
      props.setClearAll(false)
    }
   },[props.clearAll])
   

   const onPressHandler = (title)=>{
      if(title=="Contract" || title =="Permanent" || title=="Per Diem"){
        setSkillListingType(title)
        //setSkill(title)
        props.getFiltersResult(title)
      }
      if(title=="Less than 1 year" || title =="1 - 2 years"||title=="3 - 5 years"||title=="6 - 10 years"||title=="more than 10 years"){
        setSkillListingType(title)
        //setExperience(title)
        props.getFiltersResult(title)
      }
      if(title=="Hourly" || title =="Weekly"){
        setSkillListingType(title)
        props.getFiltersResult(title)
      }
      if(title=="Hide previously viewed"){
        if(!hide){
           setSkillListingType(title)
        }else{
          setSkillListingType("hide")
        }
         setHide(prevState=>!prevState)
      }
      if(props.sortCandidate){
        setSkillListingType(title)
          // setCandidtate(title)
           props.getFiltersResult(title)
      }
     
 }
    return (
           <>
        
   {props.title !="Hide" && <Text style={props.sortCandidate?{}:styles.headingStyle}>{props.title}</Text> }
           
    <RadioForm
      animation={true}
      formHorizontal={props.title=="Budget"?true:false}
    >

  {/* To create radio buttons, loop through your array of options */}
  {
     props.skillListing_props.map((obj, i) => {

      return(
     <View style={props.title=="Budget"?{marginHorizontal:width(1.5)}:props.title=="Hide"?{marginHorizontal:width(1.5)}:styles.mainBorder} key={i}>
      <RadioButton labelHorizontal={true} key={i} >
        <RadioButtonInput
          obj={obj}
          index={i}
           isSelected={obj.label===skillListingType}
           onPress={(value)=>onPressHandler(value)}
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
          labelStyle={props.title=="Budget"?{...styles.labelStyle,padding:0}:props.title=="Hide"?{...styles.labelStyle,padding:0}:props.sortCandidate?{...styles.labelStyle,marginVertical:width(2.8)}:styles.labelStyle}
        />
      </RadioButton>
      {obj.total &&
      <Text style={styles.totalStyle}>{`(${obj.total})`}</Text>
    }
      </View>
  
      )
})
  }  
 
</RadioForm>

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
    color:"#3e3e3e",
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
}
});

export default RadioBtn;