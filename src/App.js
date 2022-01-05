/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import SearchBar from './SearchBar';
import Line from './Line';
import Result from './Result';
import ModalWindow from './Modal';
import Header from './Header';
import Toggle from './Toggle';
import Card from './Card'
import nurseImg from "./assets/nurse.jpg"
import { height, width, totalSize } from 'react-native-dimension';
import Pagination from './Pagination';

const data=[
  {
    Lable:"Candidate Name",
    img:nurseImg,
    profession:"Nurse",
    experience:"3-5 years" 
  },
  {
    Lable:"Candidate Name",
    img:nurseImg,
    profession:"Nurse2",
    experience:"3-5 years" 
  },
  {
    Lable:"Candidate Name",
    img:nurseImg,
    profession:"Nurse3",
    experience:"3-5 years" 
  },

  {
    Lable:"Candidate Name",
    img:nurseImg,
    profession:"Nurse3",
    experience:"3-5 years" 
  },
  {
    Lable:"Candidate Name",
    img:nurseImg,
    profession:"Nurse3",
    experience:"3-5 years" 
  },
]

const App=()=> {
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
             <ModalWindow />
           <Toggle text="Nearby Candidates" />
           <View style={styles.internalView} >
                    <View 
                    style={styles.selectionView}
                    >
                       <Pagination data={data} />
                      {/* <FlatList
                      //nestedScrollEnabled={true}
                        numColumns={2} 
                        data={data}
                        renderItem={({item})=><Card Lable={item.Lable} img={item.img} profession={item.profession} experience={item.experience}  />}
                    /> */}
                        {/* {data.map((person,index)=>{
                          return <Card key={index} Lable={person.Lable} img={person.img} profession={person.profession} experience={person.experience}  />
                        })} */}
                        {/* <Card Lable="Candidate Name"img={nurseImg}  profession="Nurse" experience="3-5 years" />
                        <Card Lable="Candidate Name" img={nurseImg}  profession="Nurse" experience="3-5 years"  /> */}
           </View>
                </View>
               
            
      </ScrollView>
      {/* <Pagination /> */}
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
