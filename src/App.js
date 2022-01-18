/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useCallback, useState,useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text
} from 'react-native';
import SearchBar from './SearchBar';
import Line from './Line';
import Result from './Result';
import ModalWindow from './Modal';
import Header from './Header';
import Toggle from './Toggle';
import nurseImg from "./assets/nurse.jpg"
import { height, width, totalSize } from 'react-native-dimension';
import Pagination from './Pagination';
import { useFilter } from './useFilter';
import { useQuery,gql, useLazyQuery } from '@apollo/client';
import SortLocation from './SortLocation';

                                                                                

const App=()=>{
 
  const [page,setPage] = useState(1)
  const [userData,setUserData] = useState();
  const [show,setShow]=useState(false)
  const [showLocationModal,setShowLocationModal]=useState(false)
  const [locationPlaceHolder,setLocationPlaceholder] = useState("Search Location")
  const [locationData,setLocationData] = useState({
    Location:null
  })
  const [searchFilter,setSearchFilter]=useState({
    GigType:null,
    BudgetMin:null,
    BudgetMax:null,
    BudgetType:null,
    Experience:null,
    SortBy:null,
    Location:null
  })
 
 
  const setCurrentPage=useCallback(
    (pg) => {
      setPage(pg)
      getCardDetail()
    },
    [page],
  )
  
 const setShowHandler = useCallback(()=>{
         setShow(true)
         getCardDetail()
 },[show]) 

  const setLocationPlaceholderHandler = useCallback((title)=>{
            setLocationPlaceholder(title)
            console.log(title," im placeholder")
  })

console.log(searchFilter.Location, " searhc filter loavtios")

  const GET_CHARACTERS = gql`
  query{
    skilllistings(
    _sort:${searchFilter.SortBy},
     _perPage : 5,
     _page :${page},
     GigType:"${searchFilter.GigType}",
     search : "Nurse",
     Location : "${searchFilter.Location}",
     BudgetMin : "${searchFilter.BudgetMin}",
     BudgetMax : "${searchFilter.BudgetMax}",
     BudgetType : "${searchFilter.BudgetType}",
     Experience: "${searchFilter.Experience}",
    ){
      aggregate {
        count
        totalCount
      },
      data {
        _id
        ProfileId
        Title
        CreatedBy
        ModifiedBy
        IsActive
         Description
        Skills
        GigType
        MinimumBid
        users {name,email,profile {PictureUrl,ExperienceLevelName,LastLoginDate, LastSuccessfulLoginDate}}
      }
    }
  } 
  `;

  //executes when clicked on next page icon
  const [getCardDetail,{error,loading,data}]=useLazyQuery(GET_CHARACTERS,{onCompleted:setUserData})
  //executes on initial render
  useEffect(()=>{
    getCardDetail()
    return () => {
      //setUserData([]) 
      //setSearchFilter({})
    };
  },[])

//  console.log(userData, " ....,.,.")
//  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>")
//  console.log(data," im data",searchFilter)
   return (
    <SafeAreaView style={styles.parentView} >
      <Header />
    <ScrollView style={styles.parentView}  
   nestedScrollEnabled={true} >
    <View style={styles.internalView}>
        <SearchBar placeholder='Nurse' />
       </View>
        <Line style={{
            height:1,
            backgroundColor:'#e4e4e4',
            alignSelf: 'stretch'}} />
             <View style={styles.internalView}>
                <Result/>
               </View>
             <Line style={{
            height:1,
            backgroundColor:'#e4e4e4',
            alignSelf: 'stretch'}} />
             <ModalWindow page={page} setSearchFilter={setSearchFilter} 
             searchFilter={searchFilter}
              getCardDetail={getCardDetail}
               setShowHandler={setShowHandler} 
               setShowLocationModal={setShowLocationModal} 
              locationPlaceHolder={locationPlaceHolder}
              setLocationPlaceholderHandler={setLocationPlaceholderHandler}
           
             
               />
     {showLocationModal && <SortLocation modalVisible={showLocationModal} 
       //Location={searchFilter.Location}
       Location={locationData.Location}
       setShowLocationModal={setShowLocationModal}
       setLocationData={setLocationData}
         setLocationPlaceholderHandler={setLocationPlaceholderHandler}
      /> }    
           <Toggle text="Nearby Candidates" />
           {loading && <Text>Loading...</Text>}
           {userData  &&  <View style={styles.internalView} >
             <View  style={styles.selectionView}
             >
       <Pagination data={userData.skilllistings.data} setCurrentPage={setCurrentPage} totalCount={userData.skilllistings.aggregate.totalCount}  />
                </View>
                </View>
                }
      </ScrollView>
   
    </SafeAreaView>
   
  );
};

const styles = StyleSheet.create({
 
  parentView: {
    flex: 1,
    backgroundColor: "white"
  },
  internalView: {
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center'
  },
  selectionView: {
    flexDirection: 'row',
    flexWrap: "wrap",
  justifyContent:"space-between"
},
});

export default App;
