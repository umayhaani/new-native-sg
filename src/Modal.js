import React, { useCallback, useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View, ScrollView,Button, TextInput } from "react-native";
import { height, totalSize, width } from "react-native-dimension";
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import BudgetInput from "./BudgetInput";
import FilterBtn from "./FilterBtn";
import Line from "./Line";
import ModalBtn from "./ModalBtn";
import RadioBtn from "./RadioBtn";


const ModalWindow = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [btnType,setBtnType] = useState(null)
  const [skill,setSkill]=useState(null)
  const [experience,setExperience] = useState(null)
  const [budget,setBudget] = useState(null)
  const [sortBy,setSortBy]=useState(null)

  const [clearAll,setClearAll] = useState(false)
  const [min, setMin] = useState(null);
  const [max, setMax] = useState(null);

 
  const  skillListing_props = [
    {label: 'Contract', value: "Contract", total:321 },
    {label: 'Permanent', value: "Permanent" ,total:321},
    {label: 'Per Diem', value: "Per Diem", total:321 }
  ];
  const  experience_props = [
    {label: 'Less than 1 year', value: "Less than 1 year", total:1245},
    {label: "1 - 2 years", value: "1 - 2 years" , total:16},
    {label: '3 - 5 years', value: "3 - 5 years" , total:39},
    {label: '6 - 10 years', value: "6 - 10 years" , total:245},
    {label: 'more than 10 years', value: "more than 10 years" , total:245},
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

  
  const budgetMinHandler=useCallback((search)=>{
     setMin(search)
},[min])


const budgetMaxHandler=useCallback((search)=>{
   setMax(search)
},[max])


  const getFiltersResult=useCallback((title)=>{
    //console.log(title," im ")
    if(title=="Contract" || title =="Permanent" || title=="Per Diem"){
      setSkill(title)
      //props.setSearchFilter({...props.searchFilter,GigType:title})
    }
    if(title=="Less than 1 year" || title =="1 - 2 years"||title=="3 - 5 years"||title=="6 - 10 years"||title=="more than 10 years"){
      setExperience("1-2 years")
     // props.setSearchFilter({...props.searchFilter,Experience:title})
    }

    if(title=="Most Relevant" || title=="Most Recent" || title=="Desired Rate High to Low" || title=="Desired Rate Low to High"){
      if(title=="Most Recent"){
        setSortBy("MOST_RECENT")
       // props.setSearchFilter({...props.searchFilter,SortBy:"MOST_RECENT"})
      }else if(title=="Most Relevant"){
        setSortBy("MOST_RELEVANTS")
        //props.setSearchFilter({...props.searchFilter,SortBy:"MOST_RELEVANT"})
      }
      else if(title=="Desired Rate High to Low"){
         setSortBy("PAY_HI_TO_LOW")
         //props.setSearchFilter({...props.searchFilter,SortBy:"PAY_HI_TO_LOW"})
      }else{
        setSortBy("PAY_LOW_TO_HI")
        //props.setSearchFilter({...props.searchFilter,SortBy:"PAY_LOW_TO_HI"})
      }
    }
    if(title=="Hourly" || title =="Weekly"){
         if(title=="Hourly"){
           title="Hour"
           setBudget(title)
           //props.setSearchFilter({...props.searchFilter,BudgetType:title})
         }else{
           title="Week"
           setBudget(title)
           //props.setSearchFilter({...props.searchFilter,BudgetType:title})
         }
    }
  
  },[skill,experience,budget,sortBy])

        const queryHandler =()=>{
          let location;
          if(props.locationPlaceHolder=="Search Location"){
            location=null
          }else{
            location=props.locationPlaceHolder
          }
          setModalVisible(!modalVisible)
          props.setSearchFilter({...props.searchFilter,
            GigType:skill,
            BudgetMin:min,
            BudgetMax:max,
            BudgetType:budget,
            Experience:experience,
            SortBy:sortBy,
            Location:location
          })
         // props.getCardDetail()
         props.setShowHandler()
      }
      

      const locationHandler=async()=>{
        console.log("im handler")
        props.setShowLocationModal(prevState=>!prevState)
       
      }


      const clearAllHandler=()=>{
        console.log("im clear all handler")
                setClearAll(true)
                props.setLocationPlaceholderHandler("Search Location")
      }
   

   //console.log(skill,max,min,budget,experience,"...")
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
             <Text style={{...styles.textStyle,color:"#9e9e9e"}}
             onPress={clearAllHandler}
              >Clear All</Text>
             <Text style={{...styles.textStyle,fontWeight:"bold"}}>Filter</Text>
             <EvilIcons name="close" size={totalSize(3.5)}  onPress={() => setModalVisible(!modalVisible)} />
           </View> 
        }
           <Line style={{
            height:1,
            backgroundColor:'#e4e4e4',
            alignSelf: 'stretch'}} /> 
            {btnType=="Filter"?
            <ScrollView>
            <RadioBtn skillListing_props={skillListing_props} title="Skill Listing Type" getFiltersResult={getFiltersResult} 
                 clearAll={clearAll}
                 setClearAll={setClearAll}
            />
        
                  {/*...................... Location start.................... */}
            <Text style={styles.headingStyle}>Location</Text>
            <Pressable onPress={locationHandler}>
            <View style={styles.seacrhView}>
            <Text  style={styles.input}>{props.locationPlaceHolder}</Text>
            {/* <TextInput
                style={styles.input}
                //onChangeText={search => setSearch(search)}
               // value={search}
                placeholderTextColor="#7E7E7E"
                placeholder="search location"
            /> */}
          
        </View>

      </Pressable>
      
          {/* .............................................Location end................................................... */}
         
            <RadioBtn skillListing_props={experience_props}
             title="Experience Level" getFiltersResult={getFiltersResult}
             clearAll={clearAll}
             setClearAll={setClearAll}
              />
            <RadioBtn skillListing_props={budget_props} 
            title="Budget" getFiltersResult={getFiltersResult}
            clearAll={clearAll}
            setClearAll={setClearAll}
            />
             <BudgetInput budgetMinHandler={budgetMinHandler}
              budgetMaxHandler={budgetMaxHandler} 
              min={min} 
              max={max} 
              setMin={setMin}
              setMax={setMax}
              clearAll={clearAll}
              setClearAll={setClearAll}
              />
             <RadioBtn skillListing_props={hide_props}
              title="Hide" getFiltersResult={getFiltersResult}
              clearAll={clearAll}
              setClearAll={setClearAll}
               />
             <Line style={{
            height:2,
            backgroundColor:'#e4e4e4',
            alignSelf: 'stretch'}} /> 
         <FilterBtn
                        handler={queryHandler}
                        backgroundColor="#118936"
                        btnText="Apply Filter"
                        borderColor="#1DBF73"
                        color="white" />

            </ScrollView>:
           <ScrollView>
              <RadioBtn skillListing_props={sortCandidate_props} getFiltersResult={getFiltersResult} 
                sortCandidate="sortCandidate"
              clearAll={clearAll}
              setClearAll={setClearAll}
               />
                      <Line style={{
                    height:2,
                    backgroundColor:'#e4e4e4',
                    marginTop:width(20),
                    alignSelf: 'stretch'}} /> 
              <FilterBtn
                         handler={queryHandler}
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
  seacrhView: {
    borderWidth: 1,
    borderRadius:8,
    marginVertical: height(1.5),
    height:height(9),
    borderColor: '#ccc',
    marginHorizontal:width(4),
    //alignItems: 'center',
    justifyContent:"center"
},
headingStyle:{
  color:"#1e1e1e",
  fontFamily: "SFProText",
  marginTop:width(4),
  marginHorizontal:width(3.5),
  fontSize:totalSize(2.5),
  fontWeight:"600",
 
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

export default ModalWindow;