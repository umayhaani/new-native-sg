import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text,FlatList, TouchableOpacity} from 'react-native';
import { width,totalSize } from 'react-native-dimension';
import Feather from 'react-native-vector-icons/Feather';
import Card from './Card'


export default function Pagination(props) {
    const [data, setData] = useState([])
    const [pageCurrent, setpageCurrent] = useState(1)
//console.log(props.data.skilllistings.data, " paginationss.....")
    useEffect (() => {
        getData()
        return () => {

        }
    }, [pageCurrent])

    const getData = async () => {
        const apiURL = `https://jsonplaceholder.typicode.com/albums?_limit=10&_page=${pageCurrent}`;
        fetch(apiURL).then((res) => res.json())
        .then((resJson) => {
            setData(resJson)
        })
    }

   const renderItem = ({item}) => {
        return (
            <TouchableOpacity style={styles.item}>
           
                <Text style={styles.itemTitle}>{item.title}</Text>
    
            </TouchableOpacity>
        )
    }

    const handlePreviousPage = () => {
        console.log("previous page clicked", pageCurrent)
        // Do this so your page can't go negative
        setpageCurrent(pageCurrent - 1<1?1:pageCurrent - 1)
        props.setCurrentPage(pageCurrent-1)
    }

    const handleNextPage = () => {
        console.log("next page clicked", pageCurrent)
        setpageCurrent(pageCurrent + 1)
        props.setCurrentPage(pageCurrent+1)
       
    }

    const firstPageHandler =()=>{
        setpageCurrent(1)
        props.setCurrentPage(1)
    }

    const lastPageHandler = ()=>{
        console.log(Math.round(props.totalCount))
        let pageNumber = Math.round(props.totalCount/5) //replace 5 with 20
        setpageCurrent(pageNumber)
        props.setCurrentPage(pageNumber) //20/5 totaldata/perpagedata 
    }

    const ListHeader = () => {
        //View to set in Header
        return (
            
          <View style={styles.footerStyle}>
              {pageCurrent>1 &&  <TouchableOpacity onPress={handlePreviousPage}>
              {pageCurrent>2 && <TouchableOpacity onPress={firstPageHandler}><Text>First</Text></TouchableOpacity>}
             
             <Feather  name='chevron-left' size={totalSize(4)} />
            </TouchableOpacity> }
            <Text style={pageCurrent==1?{...styles.textStyle,marginLeft:width(31)}:styles.textStyle}> Page {pageCurrent}</Text>
         <TouchableOpacity onPress={handleNextPage}>
         <Feather  name='chevron-right' size={totalSize(4)} />
            </TouchableOpacity>
        <TouchableOpacity onPress={lastPageHandler}><Text>Last</Text></TouchableOpacity>
          </View>
        );
      };



     return (
 
          <FlatList
              data={props.data}
              renderItem={({item})=><Card Lable={item.users[0].name} img={item.users[0].PictureUrl} profession={item.Title} experience={item.users[0].profile.ExperienceLevelName}     />
             // <Card Lable={item.label} img={item.img} profession={item.profession} experience={item.experience} 
            
            }
              ListFooterComponent={ListHeader}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              numColumns={2} 
          />
     )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '5%',
        paddingRight: '5%'
    },
    item: {
        flexDirection: 'row',
        // justifyContent: "space-evenly",
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: '#f5f5f5',
        marginBottom: 9, 
        borderRadius: 8, 
    },

    itemTitle: {
        fontSize:13,
        fontWeight: '300'
    },

    footerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
       marginVertical:width(4),
       marginHorizontal:width(6)
    },

    textStyle:{
        color: "black",
        fontFamily: "SFProText",
        fontSize:totalSize(2.5),
        fontWeight:"normal",
       // marginRight: width(8),
    }
});





// import React, { Component } from 'react'
// import { StyleSheet, Text, View } from 'react-native'

// import Swiper from 'react-native-swiper'

 
// const  skillListing_props = [
//     {label: 'Contract', value: "Contract", total:321 },
//     {label: 'Permanent', value: "Permanent" ,total:321},
//     {label: 'Per Diem', value: "Per Diem", total:321 }
//   ];
//     const Pagination = (props) => {

//     return(
//         <Swiper style={styles.wrapper} showsButtons={true} showsPagination={true}>
           
//                 {skillListing_props.map((c)=><View style={styles.slide1}><Text style={styles.text}>{c.label}</Text></View>)}
       
        
//             {/* <View style={styles.slide2}>
//             <Text style={styles.text}>Beautiful</Text>
//             </View>
//             <View style={styles.slide3}>
//             <Text style={styles.text}>And simple</Text>
//             </View> */}
//         </Swiper>

//     )
// }




// // export default class Pagination extends Component {
// //   render() {
// //     return (
// //       <Swiper style={styles.wrapper} showsButtons={true} showsPagination={true}>
// //         <View style={styles.slide1}>
// //           <Text style={styles.text}>Hello Swiper</Text>
// //         </View>
// //         {/* <View style={styles.slide2}>
// //           <Text style={styles.text}>Beautiful</Text>
// //         </View>
// //         <View style={styles.slide3}>
// //           <Text style={styles.text}>And simple</Text>
// //         </View> */}
// //       </Swiper>
// //     )
// //   }
// // }


// const styles = StyleSheet.create({
//     wrapper: {},
//     slide1: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#9DD6EB'
//     },
//     slide2: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#97CAE5'
//     },
//     slide3: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#92BBD9'
//     },
//     text: {
//       color: '#fff',
//       fontSize: 30,
//       fontWeight: 'bold'
//     }
//   })
  
//   export default Pagination;