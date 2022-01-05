import React, { useCallback, useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View, ScrollView,Button } from "react-native";
import { height, totalSize, width } from "react-native-dimension";
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import BudgetInput from "./BudgetInput";
import FilterBtn from "./FilterBtn";
import Line from "./Line";
import ModalBtn from "./ModalBtn";
import RadioBtn from "./RadioBtn";
const ModalWindow = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [btnType,setBtnType] = useState("")
 
  const  skillListing_props = [
    {label: 'Contract', value: "Contract", total:321 },
    {label: 'Permanent', value: "Permanent" ,total:321},
    {label: 'Per Diem', value: "Per Diem", total:321 }
  ];
  const  experience_props = [
    {label: 'male', value: "male", total:3217747},
    {label: 'female', value: "female" , total:321}
  ];
   
  const budget_props = [
   {label: 'Hourly', value: "Hourly" },
   {label: 'Weekly', value: "Weekly" }
  ]
 
  const hide_props = [
    {label: 'Hide previously viewed', value: "Hide previously viewed" }
   ]
   const sortCandidate_props = [
    {label: 'Most Relevant', value: "Most Relevant" },
    {label: 'Most Recent', value: "Most Recent" },
    {label: 'Ratings High to Low', value: "Ratings High to Low" },
    {label: 'Ratings Low to High', value: "Ratings Low to High" },
    {label: 'Desired Rate High to Low', value: "Desired Rate High to Low" },
    {label: 'Desired Rate Low to High', value: "Desired Rate Low to High" },
   ]



  const toggleVisible=useCallback((btn)=>{
            setModalVisible(prevState=>!prevState)
            setBtnType(btn)
  },[modalVisible,btnType])

  return (
      <>
   
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
       <View style={styles.modalView}>
         {btnType=="Sort"? <View style={styles.headerView}>
             <Text style={{...styles.textStyle,fontWeight:"bold"}}>Sort Candidates by</Text>
             <EvilIcons name="close" size={totalSize(3.5)}  onPress={() => setModalVisible(!modalVisible)} />
           </View>: <View style={styles.headerView}>
             <Text style={{...styles.textStyle,color:"#9e9e9e"}}>Clear All</Text>
             <Text style={{...styles.textStyle,fontWeight:"bold"}}>Filter</Text>
             <EvilIcons name="close" size={totalSize(3.5)}  onPress={() => setModalVisible(!modalVisible)} />
           </View> 
        }
           {/* <View style={styles.headerView}>
             <Text style={{...styles.textStyle,color:"#9e9e9e"}}>Clear All</Text>
             <Text style={{...styles.textStyle,fontWeight:"bold"}}>Filter</Text>
             <EvilIcons name="close" size={totalSize(3.5)}  onPress={() => setModalVisible(!modalVisible)} />
           </View> */}
           <Line style={{
            height:1,
            backgroundColor:'#e4e4e4',
            alignSelf: 'stretch'}} /> 
            {btnType=="Filter"?
            <ScrollView>
            <RadioBtn skillListing_props={skillListing_props} title="Skill Listing Type" />
            <RadioBtn skillListing_props={experience_props} title="Experience Level" />
            <RadioBtn skillListing_props={budget_props} title="Budget" />
             <BudgetInput  />
             <RadioBtn skillListing_props={hide_props} title="Hide" />
             <Line style={{
            height:2,
            backgroundColor:'#e4e4e4',
            alignSelf: 'stretch'}} /> 
         <FilterBtn
                        handler={()=>console.log("ok")}
                        backgroundColor="#118936"
                        btnText="Apply Filter"
                        borderColor="#1DBF73"
                        color="white" />

            </ScrollView>:
           <ScrollView>
              <RadioBtn skillListing_props={sortCandidate_props} sortCandidate="sortCandidate" />
                      <Line style={{
                    height:2,
                    backgroundColor:'#e4e4e4',
                    marginTop:width(20),
                    alignSelf: 'stretch'}} /> 
              <FilterBtn
                        handler={()=>console.log("ok")}
                        backgroundColor="#118936"
                        btnText="Show Results"
                        borderColor="#1DBF73"
                        color="white" />
           </ScrollView>
}
          </View>
        </Modal>
    {/* filter+sortBTN */}
      <ModalBtn toggleVisible={toggleVisible} />
  </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    
  },
  modalView: {
    height:"100%",
    backgroundColor: "white",
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
  // modalText: {
  //   marginBottom: 15,
  //   textAlign: "center"
  // },

});

export default ModalWindow;